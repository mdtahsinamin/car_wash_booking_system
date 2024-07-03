import jwt from 'jsonwebtoken';
import { TJwtPayLoad } from './auth.constant';

export const generateAccessToken = async (
  jwtPayload: TJwtPayLoad,
  secret: string,
  expiresIn: string,
) => {
  return jwt.sign(jwtPayload, secret, {
    expiresIn,
  });
};

// jwtPayload, secret, { expiresIn }