import jwt from 'jsonwebtoken';
import { TJwtPayLoad } from './auth.constant';

export const generateAccessToken = async (
  jwtPayload: TJwtPayLoad,
  secret: string,
  expiresIn: string,
) => {
  return await jwt.sign(jwtPayload, secret, { expiresIn });
};
