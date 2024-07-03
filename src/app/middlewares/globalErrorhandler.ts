/* eslint-disable @typescript-eslint/no-unused-vars */
import { ErrorRequestHandler } from 'express';
import { TErrorMessage } from '../interfaces/error';
import { ZodError } from 'zod';
import handleZodError from '../errors/handleZodError';
import config from '../config';
import AppError from '../errors/AppError';
import handleCastError from '../errors/handlerCastError';
import handleDuplicateError from '../errors/handleDuplicateError';
import handleValidationError from '../errors/handleValidationError';

const globalErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
  let statusCode = 500;
  let message = 'Something went wrong!';

  let errorMessages: TErrorMessage = [
    {
      path: '',
      message: 'Something went wrong!',
    },
  ];

  // zod error handle
  if (err instanceof ZodError) {
    const zodError = handleZodError(err);
    statusCode = zodError?.statusCode;
    message = zodError?.message;
    errorMessages = zodError?.errorMessages;
  }

  // mongoose error
  else if (err?.name === 'ValidationError') {
    const validationError = handleValidationError(err);
    statusCode = validationError?.statusCode;
    message = validationError?.message;
    errorMessages = validationError?.errorMessages;
  }
  // cast error
  else if (err?.name === 'CastError') {
    const castError = handleCastError(err);
    statusCode = castError?.statusCode;
    message = castError?.message;
    errorMessages = castError?.errorMessages;
  }

  // duplicate value
  else if (err?.code === 11000) {
    const duplicateError = handleDuplicateError(err);
    statusCode = duplicateError?.statusCode;
    message = duplicateError?.message;
    errorMessages = duplicateError?.errorMessages;
  }
  // AppError
  else if (err instanceof AppError) {
    statusCode = err.statusCode;
    message = err.message;

    return res.status(statusCode).json({
      success: false,
      statusCode,
      message,
    });
  }

  return res.status(statusCode).json({
    success: false,
    message,
    errorMessages,
    stack: config.node_env === 'development' ? err?.stack : null,
  });
};

export default globalErrorHandler;
