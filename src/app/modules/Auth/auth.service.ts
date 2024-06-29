import httpStatus from 'http-status';
import AppError from '../../errors/AppError';
import { TUser } from '../User/user.interface';
import { User } from '../User/user.model';
import { TAuth } from './auth.interface';
import { generateAccessToken } from './auth.utils';
import config from '../../config';

const registerUserIntoDB = async (payload: TUser) => {
  const result = await User.create(payload);
  return result;
};

const loginUser = async (payload: TAuth) => {
  let user = await User.isUserExistsByEmail(payload?.email);

  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, 'This user is not found');
  }

  if (!(await User.isPasswordMatch(payload?.password, user.password))) {
    throw new AppError(httpStatus.FORBIDDEN, 'Password not match !');
  }

  const jwtPayload = {
    userId: user?._id,
    role: user?.role,
  };

  const accessToken = await generateAccessToken(
    jwtPayload,
    config.jwt_secret as string,
    config.jwt_expires_in as string,
  );

  user = await User.findById(user?._id);

  return {
    accessToken,
    user,
  };
};

export const AuthServices = {
  registerUserIntoDB,
  loginUser,
};
