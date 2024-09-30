import { Request, Response } from 'express';
import { userService } from './user.service';
import httpStatus from 'http-status';
import { catchAsync } from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';

const createUser = catchAsync(async (req: Request, res: Response) => {
  const user = req.body;
  const profilePicture = req.file?.path;
  const result = await userService.createUserInToBD(user, profilePicture);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'successfully create user',
    data: result,
  });
});

const getAllUser = catchAsync(async (req: Request, res: Response) => {
  const result = await userService.getAllUsersInToBD();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'users retrieved succesfully',
    data: result,
  });
});

const getSingleUser = catchAsync(async (req, res) => {
  const ratingId = req.params.id;
  const result = await userService.getSingleUserToBd(ratingId);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Rating retrieved successfully',
    data: result,
  });
});

const singleUserUpdate = catchAsync(async (req, res) => {
  const { id } = req.params;

  const result = await userService.singleUserUpdeteToBd(id, req.body);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Rating updated successfully',
    data: result,
  });
});

const singleUserDelete = catchAsync(async (req, res) => {
  const { id } = req.params;

  const result = await userService.singleUserDeleteToBd(id);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Rating deleted successfully',
    data: result,
  });
});

export const userController = {
  createUser,
  getAllUser,
  getSingleUser,
  singleUserUpdate,
  singleUserDelete,
};
