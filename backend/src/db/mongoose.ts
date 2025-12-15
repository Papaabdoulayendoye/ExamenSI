import mongoose from 'mongoose';

import { logger } from '../config/logger';

export async function connectMongo(mongoUri: string): Promise<void> {
  mongoose.set('strictQuery', true);
  await mongoose.connect(mongoUri);
  logger.info({ mongoUri }, 'MongoDB connected');
}

export async function disconnectMongo(): Promise<void> {
  await mongoose.disconnect();
  logger.info('MongoDB disconnected');
}
