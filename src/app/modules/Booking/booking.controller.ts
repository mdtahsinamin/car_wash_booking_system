import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import { BookingServices } from './booking.service';
import sendResponse from '../../utils/sendResponse';

const bookingService = catchAsync(async (req, res) => {
  const result = await BookingServices.createBookingIntoDB(req.user, req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Booking successful',
    data: result,
  });
});

const getAllBookingService = catchAsync(async (req, res) => {
  const result = await BookingServices.getAllBooking(req.query);

  sendResponse(res, {
    success: result.length > 0 ? true : false,
    statusCode: result.length > 0 ? httpStatus.OK : httpStatus.NOT_FOUND,
    message:
      result.length > 0
        ? 'All bookings retrieved successfully'
        : 'No Data Found',
    data: result,
  });
});

export const BookingControllers = {
  bookingService,
  getAllBookingService,
};
