import { CounterModel } from '../models/counter.model';

const DEFAULT_KEY = 'default';

export async function getCounterValue(key = DEFAULT_KEY): Promise<number> {
  const doc = await CounterModel.findOne({ key }).lean();
  if (!doc) {
    const created = await CounterModel.create({ key, value: 0 });
    return created.value;
  }
  return doc.value;
}

export async function incrementCounter(key = DEFAULT_KEY): Promise<number> {
  const updated = await CounterModel.findOneAndUpdate(
    { key },
    { $inc: { value: 1 } },
    { new: true, upsert: true, setDefaultsOnInsert: true },
  ).lean();

  return updated!.value;
}

export async function decrementCounter(key = DEFAULT_KEY): Promise<number> {
  const updated = await CounterModel.findOneAndUpdate(
    { key },
    { $inc: { value: -1 } },
    { new: true, upsert: true, setDefaultsOnInsert: true },
  ).lean();

  return updated!.value;
}

export async function setCounterValue(value: number, key = DEFAULT_KEY): Promise<number> {
  const updated = await CounterModel.findOneAndUpdate(
    { key },
    { $set: { value } },
    { new: true, upsert: true, setDefaultsOnInsert: true },
  ).lean();

  return updated!.value;
}

export async function resetCounter(key = DEFAULT_KEY): Promise<number> {
  return setCounterValue(0, key);
}
