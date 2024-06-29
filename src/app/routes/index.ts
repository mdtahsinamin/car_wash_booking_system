import express from 'express';
import { ServiceRoutes } from '../modules/Services/services.route';
import { SlotRoutes } from '../modules/Slot/slot.route';
import { AuthRoutes } from '../modules/Auth/auth.route';

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
];

moduleRoutes.map((route) => router.use(route.path, route.route));

export default router;
