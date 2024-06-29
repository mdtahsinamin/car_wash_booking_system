import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { AuthServices } from './auth.service';

const signup = catchAsync(async (req, res) => {
  const result = await AuthServices.registerUserIntoDB(req.body);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'User registered successfully',
    data: result,
  });
});

const login = catchAsync(async (req, res) => {
  const { accessToken, user } = await AuthServices.loginUser(req.body);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'User logged in successfully',
    token: accessToken,
    data: user,
  });
});

export const AuthControllers = {
  signup,
  login,
};
