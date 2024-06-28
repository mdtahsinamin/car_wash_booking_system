import { Model } from 'mongoose';

export interface TServices {
  name: string;
  description: string;
  price: number;
  duration: number;
  isDeleted: boolean;
}

export interface ServiceModel extends Model<TServices> {
  isServiceExists(id: string): Promise<TServices>;
}
