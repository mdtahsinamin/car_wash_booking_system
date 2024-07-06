import httpStatus from 'http-status';
import AppError from '../../errors/AppError';
import { Services } from '../Services/services.model';
import { TSlot } from './slot.interface';
import { generateSlotWithTimeInterval } from './slot.utils';
import { Slot } from './slot.model';
import QueryBuilder from '../../builder/QueryBuilder';
import { slotSearchableFields } from './slot.constant';

const createSlotIntoDB = async (payload: TSlot) => {
  const service = await Services.findById({ _id: payload?.service });

  if (!service) {
    throw new AppError(httpStatus.NOT_FOUND, 'No Data Found');
  }

  if (service?.isDeleted) {
    throw new AppError(httpStatus.NOT_FOUND, 'No Data Found');
  }

  const slotTimeIntervals = generateSlotWithTimeInterval(
    service?.duration,
    payload?.startTime,
    payload?.endTime,
  );

  const slotWithTimeIntervalsData: Partial<TSlot>[] = slotTimeIntervals.map(
    (slot) => ({
      service: payload.service,
      date: payload.date,
      startTime: slot.startTime,
      endTime: slot.endTime,
    }),
  );

  const result = await Slot.create(slotWithTimeIntervalsData);

  return result;
};

const getAvailableSlot = async (query: Record<string, unknown>) => {
  const slotQuery = new QueryBuilder(Slot.find().populate('service'), query)
    .search(slotSearchableFields)
    .filter();

  const result = await slotQuery.modelQuery;

  return result;
};

export const SlotServices = {
  createSlotIntoDB,
  getAvailableSlot,
};
