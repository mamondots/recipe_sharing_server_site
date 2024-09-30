import { TLoginUser, TRegisterUser } from './auth.interface';
import bcrypt from 'bcrypt';

import config from '../../config';
import { userModel } from '../user/user.model';
import { createToken } from './auth.utils';
import AppError from '../../errors/AppError';
import httpStatus from 'http-status';

const registerUser = async (payload: TRegisterUser) => {
  // checking if the user is exist
  const user = await userModel.isUserExistsByEmail(payload?.email);

  if (user) {
    throw new AppError(httpStatus.NOT_FOUND, 'This user is already exist!');
  }

  // payload.role = user;

  //create new user
  const newUser = await userModel.create(payload);

  //create token and sent to the  client

  const jwtPayload = {
    _id: newUser._id,
    name: newUser.name,
    email: newUser.email,
    profilePicture: newUser.profilePicture,
    role: newUser.role,
    status: newUser.status,
    follower: newUser.follower,
  };

  const accessToken = createToken(
    jwtPayload,
    config.jwt_acess_token_secret as string,
    config.access_token_expires_in as string,
  );

  const refreshToken = createToken(
    jwtPayload,
    config.jwt_refresh_secret as string,
    config.jwt_refresh_expires_in as string,
  );

  return {
    accessToken,
    refreshToken,
  };
};

const loginUser = async (payload: TLoginUser) => {
  // checking if the user is exist
  const user = await userModel.isUserExistsByEmail(payload?.email);

  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, 'This user is not found!');
  }

  // checking if the user is blocked

  const userStatus = user.status;

  if (userStatus === 'block') {
    throw new AppError(httpStatus.FORBIDDEN, 'This user is blocked!');
  }

  //checking if the password is correct

  if (!(await userModel.isPasswordMatched(payload?.password, user?.password)))
    throw new AppError(httpStatus.FORBIDDEN, 'Password do not matched');

  //create token and send to the  client

  const jwtPayload = {
    email: user.email,
    role: user.role,
  };

  const accessToken = createToken(
    jwtPayload,
    config.cloudinary_api_secret as string,
    config.access_token_expires_in as string,
  );

  const refreshToken = createToken(
    jwtPayload,
    config.jwt_refresh_secret as string,
    config.jwt_refresh_expires_in as string,
  );

  const userData = await userModel.findOne({ email: payload.email, payload });

  return {
    accessToken,
    refreshToken,
    userData,
  };
};

export const AuthServices = {
  loginUser,
  registerUser,
};
