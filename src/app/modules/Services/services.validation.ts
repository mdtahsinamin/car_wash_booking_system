import { z } from 'zod';

const createServicesValidationSchema = z.object({
  body: z.object({
    name: z.string({ required_error: 'name is required' }),
    description: z.string({ required_error: 'email is required' }),
    price: z.number({
      required_error: 'price is required',
      invalid_type_error: 'price must be a number',
    }),
    duration: z.number({
      required_error: 'duration is required',
      invalid_type_error: 'price must be a number',
    }),
    isDeleted: z.boolean(),
  }),
});

const updateServicesValidationSchema = z.object({
  body: z.object({
    name: z.string({ required_error: 'name is required' }).optional(),
    description: z.string({ required_error: 'email is required' }).optional(),
    price: z
      .number({
        required_error: 'price is required',
        invalid_type_error: 'price must be a number',
      })
      .optional(),
    duration: z
      .number({
        required_error: 'duration is required',
        invalid_type_error: 'price must be a number',
      })
      .optional(),
    isDeleted: z.boolean().optional(),
  }),
});

export const ServicesValidationSchema = {
  createServicesValidationSchema,
  updateServicesValidationSchema,
};
