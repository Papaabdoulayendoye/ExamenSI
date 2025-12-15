import cors from 'cors';
import express from 'express';
import pinoHttp from 'pino-http';

import { logger } from './config/logger';
import { counterRouter } from './routes/counter.routes';
import { healthRouter } from './routes/health.routes';

export function createApp(corsOrigin: string) {
  const app = express();

  app.use(
    pinoHttp({
      logger,
    }),
  );

  app.use(
    cors({
      origin: corsOrigin === '*' ? true : corsOrigin.split(',').map((s) => s.trim()),
      credentials: true,
    }),
  );

  app.use(express.json());

  app.use('/api', healthRouter);
  app.use('/api/counter', counterRouter);

  app.use((_req, res) => {
    res.status(404).json({ error: 'Not Found' });
  });

  app.use((err: unknown, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
    logger.error({ err }, 'Unhandled error');
    res.status(500).json({ error: 'Internal Server Error' });
  });

  return app;
}
