import { ZodError, ZodIssue } from 'zod';
import { TErrorMessage, TErrorResponse } from '../interfaces/error';

const handleZodError = (err: ZodError): TErrorResponse => {
  const errorMessages: TErrorMessage = err.issues.map((issue: ZodIssue) => {
    return {
      path: issue?.path[issue.path.length - 1],
      message: issue?.message,
    };
  });
  const statusCode = 400;

  return {
    statusCode,
    message: 'Validation Error',
    errorMessages,
  };
};

export default handleZodError;
