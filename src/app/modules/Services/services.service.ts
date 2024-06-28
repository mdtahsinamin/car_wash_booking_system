import httpStatus from 'http-status';
import QueryBuilder from '../../builder/QueryBuilder';
import AppError from '../../errors/AppError';
import { serviceSearchableFields } from './services.constant';
import { TServices } from './services.interface';
import { Services } from './services.model';

const createServiceIntoDB = async (payload: TServices) => {
  const result = await Services.create(payload);

  return result;
};

const getSingleServiceFromDB = async (id: string) => {
  // check service exists or not
  const result = await Services.isServiceExists(id);
  if (!result || result?.isDeleted) {
    throw new AppError(httpStatus.NOT_FOUND, 'No Data Found');
  }

  return result;
};

const getAllServicesFromDB = async (query: Record<string, unknown>) => {
  const serviceQuery = new QueryBuilder(Services.find(), query)
    .search(serviceSearchableFields)
    .filter()
    .sort()
    .paginate()
    .fields();

  const result = await serviceQuery.modelQuery;

  return result;
};

const updateServicesIntoDB = async (
  id: string,
  payload: Partial<TServices>,
) => {
  // check service exists or not
  const isServiceExists = await Services.isServiceExists(id);

  // check if exists data is also deleted and service not found
  if (!isServiceExists || isServiceExists?.isDeleted) {
    throw new AppError(httpStatus.NOT_FOUND, 'No Data Found');
  }
  // update the service
  const result = await Services.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
  return result;
};

const deleteServicesIntoDB = async (id: string) => {
  // check service exists or not
  const isServiceExists = await Services.isServiceExists(id);

  // check if exists data is also deleted and service not found
  if (!isServiceExists || isServiceExists?.isDeleted) {
    throw new AppError(httpStatus.NOT_FOUND, 'No Data Found');
  }
  // update the service
  const result = await Services.findByIdAndUpdate(
    id,
    { isDeleted: true },
    {
      new: true,
      runValidators: true,
    },
  );
  return result;
};

export const WashingServices = {
  createServiceIntoDB,
  getSingleServiceFromDB,
  getAllServicesFromDB,
  updateServicesIntoDB,
  deleteServicesIntoDB,
};
