import { Schema, model } from 'mongoose';
import { TSlot } from './slot.interface';
import { ISBooked } from './slot.constant';

const slotSchema = new Schema<TSlot>(
  {
    service: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'Services',
    },
    date: {
      type: String,
      required: true,
    },
    startTime: {
      type: String,
      required: true,
    },
    endTime: {
      type: String,
      required: true,
    },
    isBooked: {
      type: String,
      enum: ISBooked,
      required: true,
      default: 'available',
    },
  },
  {
    timestamps: true,
  },
);

export const Slot = model<TSlot>('Slot', slotSchema);
