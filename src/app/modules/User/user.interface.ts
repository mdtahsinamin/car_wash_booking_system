import { Model, Types } from 'mongoose';
import { USER_ROLE } from './user.constant';

export interface TUser {
  _id: Types.ObjectId;
  name: string;
  email: string;
  password: string;
  phone: string;
  role: 'user' | 'admin';
  address: string;
}

export type TUserRole = keyof typeof USER_ROLE;

export interface UserModel extends Model<TUser> {
  isPasswordMatch(plainTextPassword: string, hashedPassword: string): boolean;
  isUserExistsByEmail(email: string): Promise<TUser | null>;
}
