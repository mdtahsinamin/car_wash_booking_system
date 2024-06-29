import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import { SlotServices } from './slot.service';
import sendResponse from '../../utils/sendResponse';

const createSlot = catchAsync(async (req, res) => {
  const result = await SlotServices.createSlotIntoDB(req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Slots created successfully',
    data: result,
  });
});

const getAvailableSlots = catchAsync(async (req, res) => {
  const result = await SlotServices.getAvailableSlot(req.query);

  sendResponse(res, {
    success: result.length > 0 ? true : false,
    statusCode: result.length > 0 ? httpStatus.OK : httpStatus.NOT_FOUND,
    message:
      result.length > 0
        ? 'Available slots retrieved successfully'
        : 'No Data Found',
    data: result,
  });
});
export const SlotControllers = {
  createSlot,
  getAvailableSlots,
};
