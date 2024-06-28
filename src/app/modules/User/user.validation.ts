import { z } from 'zod';

const createUserValidationSchema = z.object({
  body: z.object({
    name: z.string({ required_error: 'name is required' }),
    email: z
      .string({ required_error: 'email is required' })
      .email({ message: 'Invalid email address' }),
    password: z.string({ required_error: 'password is required' }),
    phone: z.string({ required_error: 'phone is required' }),
    role: z.enum(['admin', 'user']),
    address: z.string({ required_error: 'address is required' }),
  }),
});

export const UserValidationSchema = {
  createUserValidationSchema,
};
