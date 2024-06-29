import { z } from 'zod';
import { ISBooked } from './slot.constant';

const createSlotValidationSchema = z.object({
  body: z.object({
    service: z.string({ required_error: 'service is required' }),
    date: z
      .string({
        required_error: 'date is required',
        invalid_type_error: 'date must follow YY:MM:DD format',
      })
      .date(),
    startTime: z.string({ required_error: 'Start Time is required' }),
    endTime: z.string({ required_error: 'End Time is required' }),
    isBooked: z.enum([...ISBooked] as [string, ...string[]]).optional(),
  }),
});

export const SlotValidation = {
  createSlotValidationSchema,
};
