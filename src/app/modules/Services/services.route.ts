import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { ServicesValidationSchema } from './services.validation';
import { ServicesControllers } from './services.controller';
import { SlotValidation } from '../Slot/slot.validation';
import { SlotControllers } from '../Slot/slot.controller';
import auth from '../../middlewares/auth';
import { USER_ROLE } from '../User/user.constant';

const router = express.Router();

router.post(
  '/',
  auth(USER_ROLE.admin),
  validateRequest(ServicesValidationSchema.createServicesValidationSchema),
  ServicesControllers.createService,
);
router.get('/:id', ServicesControllers.getSingleService);

router.get('/', auth(), ServicesControllers.getAllServices);

router.put(
  '/:id',
  auth(USER_ROLE.admin),
  validateRequest(ServicesValidationSchema.updateServicesValidationSchema),
  ServicesControllers.updateService,
);

router.post(
  '/slots',
  auth(USER_ROLE.admin),
  validateRequest(SlotValidation.createSlotValidationSchema),
  SlotControllers.createSlot,
);

router.delete('/:id', auth(USER_ROLE.admin), ServicesControllers.deleteService);

export const ServiceRoutes = router;
