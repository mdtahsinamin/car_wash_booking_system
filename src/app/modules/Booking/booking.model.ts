import { Schema, model } from 'mongoose';
import { TBooking } from './booking.interface';
import { vehicleTypes } from './booking.constant';
const bookingSchema = new Schema<TBooking>(
  {
    customer: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    serviceId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'Services',
    },
    slotId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'Slot',
    },
    vehicleType: {
      type: String,
      enum: vehicleTypes,
      required: true,
    },
    vehicleBrand: {
      type: String,
      required: true,
    },
    vehicleModel: {
      type: String,
      required: true,
    },
    manufacturingYear: {
      type: Number,
      required: true,
    },
    registrationPlate: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export const Booking = model<TBooking>('Booking', bookingSchema);
