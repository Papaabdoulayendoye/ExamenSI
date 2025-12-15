import type { Request, Response } from 'express';
import { z } from 'zod';

import {
  decrementCounter,
  getCounterValue,
  incrementCounter,
  resetCounter,
  setCounterValue,
} from '../services/counter.service';

export async function getCounter(_req: Request, res: Response): Promise<void> {
  const value = await getCounterValue();
  res.json({ value });
}

export async function postIncrement(_req: Request, res: Response): Promise<void> {
  const value = await incrementCounter();
  res.json({ value });
}

export async function postDecrement(_req: Request, res: Response): Promise<void> {
  const value = await decrementCounter();
  res.json({ value });
}

export async function postReset(_req: Request, res: Response): Promise<void> {
  const value = await resetCounter();
  res.json({ value });
}

const setSchema = z.object({ value: z.number().int() });

export async function postSet(req: Request, res: Response): Promise<void> {
  const body = setSchema.parse(req.body);
  const value = await setCounterValue(body.value);
  res.json({ value });
}
