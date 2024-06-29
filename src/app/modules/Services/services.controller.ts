import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { WashingServices } from './services.service';

const createService = catchAsync(async (req, res) => {
  const result = await WashingServices.createServiceIntoDB(req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Service created successfully',
    data: result,
  });
});

const getSingleService = catchAsync(async (req, res) => {
  const { id } = req.params;

  const result = await WashingServices.getSingleServiceFromDB(id);

  sendResponse(res, {
    success: result ? true : false,
    statusCode: result ? httpStatus.OK : httpStatus.NOT_FOUND,
    message: result ? 'Service retrieved successfully' : 'No Data Found',
    data: result,
  });
});

const getAllServices = catchAsync(async (req, res) => {
  const result = await WashingServices.getAllServicesFromDB(req.query);

  sendResponse(res, {
    success: result.length > 0 ? true : false,
    statusCode: result.length > 0 ? httpStatus.OK : httpStatus.NOT_FOUND,
    message:
      result.length > 0 ? 'Services retrieved successfully' : 'No Data Found',
    data: result,
  });
});

const updateService = catchAsync(async (req, res) => {
  const { id } = req.params;

  const result = await WashingServices.updateServicesIntoDB(id, req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Service updated successfully',
    data: result,
  });
});

const deleteService = catchAsync(async (req, res) => {
  const { id } = req.params;

  const result = await WashingServices.deleteServicesIntoDB(id);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Service deleted successfully',
    data: result,
  });
});

export const ServicesControllers = {
  createService,
  getSingleService,
  getAllServices,
  updateService,
  deleteService,
};
