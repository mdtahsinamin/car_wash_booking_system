import { Types } from 'mongoose';

export interface TJwtPayLoad {
  userId: Types.ObjectId;
  role: string;
}
