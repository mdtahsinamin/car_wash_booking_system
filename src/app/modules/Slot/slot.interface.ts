import { Types } from 'mongoose';

export interface TSlot {
  service: Types.ObjectId;
  date: string;
  startTime: string;
  endTime: string;
  isBooked: 'available' | 'booked' | 'canceled';
}
