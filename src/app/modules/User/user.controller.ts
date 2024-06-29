import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { UserServices } from './user.service';

const getMyBooking = catchAsync(async (req, res) => {
  const { user } = req;
  const result = await UserServices.getMyBooking(user);

  sendResponse(res, {
    success: result.length > 0 ? true : false,
    statusCode: result.length > 0 ? httpStatus.OK : httpStatus.NOT_FOUND,
    message:
      result.length > 0
        ? 'User bookings retrieved successfully'
        : 'No Data Found',
    data: result,
  });
});

export const UserControllers = {
  getMyBooking,
};
