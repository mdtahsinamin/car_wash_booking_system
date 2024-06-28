import { Model } from 'mongoose';

export interface TUser {
  name: string;
  email: string;
  password: string;
  phone: string;
  role: 'user' | 'admin';
  address: string;
}
export interface UserModel extends Model<TUser> {
  isPasswordMatch(plainTextPassword: string, hashedPassword: string): boolean;
}
