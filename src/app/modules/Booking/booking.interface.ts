import { Types } from 'mongoose';
import { TVehicleTypes } from './booking.constant';

export interface TBooking {
  customer: Types.ObjectId;
  service: Types.ObjectId;
  slot: Types.ObjectId;
  vehicleType: TVehicleTypes;
  vehicleBrand: string;
  vehicleModel: string;
  manufacturingYear: number;
  registrationPlate: string;
}
