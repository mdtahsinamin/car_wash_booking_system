/* eslint-disable @typescript-eslint/no-explicit-any */
import { JwtPayload } from 'jsonwebtoken';
import { TBooking } from './booking.interface';
import { User } from '../User/user.model';
import AppError from '../../errors/AppError';
import httpStatus from 'http-status';
import { Services } from '../Services/services.model';
import { Slot } from '../Slot/slot.model';
import mongoose from 'mongoose';
import { Booking } from './booking.model';
import QueryBuilder from '../../builder/QueryBuilder';

const createBookingIntoDB = async (user: JwtPayload, payload: TBooking) => {
  // user exists or not
  const isUserExists = await User.findById({ _id: user?.userId });

  if (!isUserExists) {
    throw new AppError(httpStatus.NOT_FOUND, 'user is not found');
  }

  // set the customer id
  payload.customer = user?.userId;

  // service exists or not
  const isServiceExists = await Services.isServiceExists(
    payload?.serviceId as string,
  );

  if (!isServiceExists) {
    throw new AppError(httpStatus.NOT_FOUND, 'Service is not found');
  }

  // slot exists or not

  const isSlotExist = await Slot.findById({ _id: payload?.slotId });

  if (!isSlotExist) {
    throw new AppError(httpStatus.NOT_FOUND, 'Slot is not found');
  }
  // slot booked or not
  if (isSlotExist?.isBooked === 'booked') {
    throw new AppError(httpStatus.BAD_REQUEST, 'Slot is not already booked');
  }

  const session = await mongoose.startSession();

  try {
    await session.startTransaction();

    // update the slot
    const updateSlot = await Slot.findByIdAndUpdate(
      {
        _id: payload?.slotId,
      },
      {
        isBooked: 'booked',
      },
      {
        new: true,
        runValidators: true,
      },
    );

    if (!updateSlot) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Failed to update slot');
    }

    const result = (
      await (
        await (await Booking.create(payload)).populate('customer')
      ).populate('serviceId')
    ).populate('slotId');

    await session.commitTransaction();
    await session.endSession();

    return result;
  } catch (error: any) {
    await session.abortTransaction();
    await session.endSession();
    throw new Error(error);
  }
};

const getAllBooking = async (query: Record<string, unknown>) => {
  const bookingQuery = new QueryBuilder(
    Booking.find()
      .populate('customer')
      .populate('serviceId')
      .populate('slotId'),
    query,
  );

  const result = await bookingQuery.modelQuery;

  return result;
};

export const BookingServices = {
  createBookingIntoDB,
  getAllBooking,
};
