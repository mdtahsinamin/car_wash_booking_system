/* eslint-disable @typescript-eslint/no-explicit-any */
import { TErrorMessage, TErrorResponse } from '../interfaces/error';

const handleDuplicateError = (err: any): TErrorResponse => {
  const match = err.message.match(/"([^"]*)"/);

  // The extracted value will be in the first capturing group
  const extractedMessage = match && match[1];

  const errorMessages: TErrorMessage = [
    {
      path: '',
      message: `${extractedMessage} is already exists`,
    },
  ];

  const statusCode = 400;

  return {
    statusCode,
    message: 'Duplicate Error',
    errorMessages,
  };
};

export default handleDuplicateError;
