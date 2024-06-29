import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { ServicesValidationSchema } from './services.validation';
import { ServicesControllers } from './services.controller';
import { SlotValidation } from '../Slot/slot.validation';
import { SlotControllers } from '../Slot/slot.controller';

//! admin
const router = express.Router();

router.post(
  '/',
  validateRequest(ServicesValidationSchema.createServicesValidationSchema),
  ServicesControllers.createService,
);
router.get('/:id', ServicesControllers.getSingleService);

router.get('/', ServicesControllers.getAllServices);

router.put(
  '/:id',
  validateRequest(ServicesValidationSchema.updateServicesValidationSchema),
  ServicesControllers.updateService,
);

router.post(
  '/slots',
  validateRequest(SlotValidation.createSlotValidationSchema),
  SlotControllers.createSlot,
);

router.delete('/:id', ServicesControllers.deleteService);

export const ServiceRoutes = router;
