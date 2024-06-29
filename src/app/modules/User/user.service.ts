import { JwtPayload } from 'jsonwebtoken';
import { User } from './user.model';
import AppError from '../../errors/AppError';
import httpStatus from 'http-status';
import { Booking } from '../Booking/booking.model';

const getMyBooking = async (user: JwtPayload) => {
  const isUserExists = await User.findById({ _id: user?.userId });

  if (!isUserExists) {
    throw new AppError(httpStatus.NOT_FOUND, 'user is not found');
  }

  const result = await Booking.find({ customer: user?.userId })
    .populate('customer')
    .populate('serviceId')
    .populate('slotId');

  return result;
};

export const UserServices = {
  getMyBooking,
};
