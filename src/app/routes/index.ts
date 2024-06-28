import express from 'express';
import { ServiceRoutes } from '../modules/Services/services.route';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/services',
    route: ServiceRoutes,
  },
];

moduleRoutes.map((route) => router.use(route.path, route.route));

export default router;
