import express from 'express';
import { BookingControllers } from './booking.controller';
import auth from '../../middlewares/auth';
import { USER_ROLE } from '../User/user.constant';

const router = express.Router();

router.post('/', auth(USER_ROLE.user), BookingControllers.bookingService);
router.get('/', auth(USER_ROLE.admin), BookingControllers.getAllBookingService);

export const BookingRoutes = router;
