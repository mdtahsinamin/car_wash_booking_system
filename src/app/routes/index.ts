import express from 'express';
import { ServiceRoutes } from '../modules/Services/services.route';
import { SlotRoutes } from '../modules/Slot/slot.route';
import { AuthRoutes } from '../modules/Auth/auth.route';
import { BookingRoutes } from '../modules/Booking/booking.route';
import { UserRoutes } from '../modules/User/user.route';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/services',
    route: ServiceRoutes,
  },
  {
    path: '/slots',
    route: SlotRoutes,
  },
  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path: '/bookings',
    route: BookingRoutes,
  },
  {
    path: '/my-bookings',
    route: UserRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
