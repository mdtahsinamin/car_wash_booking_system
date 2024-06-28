import { AnyZodObject } from 'zod';
import catchAsync from '../utils/catchAsync';

const validateRequest = (schema: AnyZodObject) => {
  return catchAsync(async (req, _res, next) => {
    await schema.parseAsync({
      body: req.body,
    });
    next();
  });
};

export default validateRequest;
