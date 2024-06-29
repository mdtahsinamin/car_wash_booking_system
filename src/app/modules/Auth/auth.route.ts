import express from 'express';
import { AuthControllers } from './auth.controller';
import validateRequest from '../../middlewares/validateRequest';
import { UserValidationSchema } from '../User/user.validation';
import { AuthValidation } from './auth.validation';

const router = express.Router();

router.post(
  '/signup',
  validateRequest(UserValidationSchema.createUserValidationSchema),
  AuthControllers.signup,
);

router.post(
  '/login',
  validateRequest(AuthValidation.createLoginValidation),
  AuthControllers.login,
);

export const AuthRoutes = router;
