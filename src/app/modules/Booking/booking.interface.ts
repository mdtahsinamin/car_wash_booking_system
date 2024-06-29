import { Types } from 'mongoose';
import { TVehicleTypes } from './booking.constant';

export interface TBooking {
  customer: Types.ObjectId;
  serviceId: Types.ObjectId | string;
  slotId: Types.ObjectId;
  vehicleType: TVehicleTypes;
  vehicleBrand: string;
  vehicleModel: string;
  manufacturingYear: number;
  registrationPlate: string;
}
