import mongoose, { type InferSchemaType } from 'mongoose';

const counterSchema = new mongoose.Schema(
  {
    key: { type: String, required: true, unique: true, index: true },
    value: { type: Number, required: true, default: 0 },
  },
  {
    timestamps: true,
  },
);

export type CounterDoc = InferSchemaType<typeof counterSchema>;

export const CounterModel = mongoose.model('Counter', counterSchema);
