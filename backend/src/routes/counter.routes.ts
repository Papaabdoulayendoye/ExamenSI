import { Router } from 'express';

import {
  getCounter,
  postDecrement,
  postIncrement,
  postReset,
  postSet,
} from '../controllers/counter.controller';

export const counterRouter = Router();

counterRouter.get('/', getCounter);
counterRouter.post('/increment', postIncrement);
counterRouter.post('/decrement', postDecrement);
counterRouter.post('/reset', postReset);
counterRouter.post('/set', postSet);
