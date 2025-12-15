import 'dotenv/config';

import { createApp } from './app';
import { loadEnv } from './config/env';
import { logger } from './config/logger';
import { connectMongo, disconnectMongo } from './db/mongoose';

async function main() {
  const env = loadEnv();

  await connectMongo(env.MONGODB_URI);

  const app = createApp(env.CORS_ORIGIN);

  const server = app.listen(env.PORT, () => {
    logger.info({ port: env.PORT }, 'API listening');
  });

  const shutdown = async (signal: string) => {
    logger.info({ signal }, 'Shutting down');
    server.close(async () => {
      await disconnectMongo();
      process.exit(0);
    });
  };

  process.on('SIGINT', () => shutdown('SIGINT'));
  process.on('SIGTERM', () => shutdown('SIGTERM'));
}

main().catch((err) => {
  logger.error({ err }, 'Fatal startup error');
  process.exit(1);
});
