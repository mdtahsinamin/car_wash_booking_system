import { Response } from 'express';
import { TSendResponse } from '../interfaces/response';

const sendResponse = <T>(res: Response, data: TSendResponse<T>) => {
  return res.status(data.statusCode).json({
    success: data.success,
    statusCode: data.statusCode,
    message: data.message,
    data: data?.data,
  });
};

export default sendResponse;
