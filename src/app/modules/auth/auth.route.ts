import express from 'express';

import { authControllers } from './auth.controller';

const router = express.Router();

router.post('/register', authControllers.registerUser);
router.post('/login', authControllers.loginUser);

// router.post(
//   '/change-password',
//   auth(USER_ROLE.USER, USER_ROLE.ADMIN),
//   validateRequest(AuthValidation.changePasswordValidationSchema),
//   AuthControllers.changePassword
// );

// router.post(
//   '/refresh-token',
//   validateRequestCookies(AuthValidation.refreshTokenValidationSchema),
//   AuthControllers.refreshToken
// );

export const AuthRoutes = router;
