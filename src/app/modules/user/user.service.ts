import { TUser } from './user.interface';
import { userModel } from './user.model';

const createUserInToBD = async (
  payload: TUser,
  profilePicture: string | undefined,
) => {
  const result = await userModel.create(payload);
  return result;
};

const getAllUsersInToBD = async () => {
  const result = await userModel.find();
  return result;
};

const getSingleUserToBd = async (userId: string) => {
  const result = await userModel.findById(userId);
  return result;
};

const singleUserUpdeteToBd = async (
  userId: string,
  updateUser: Partial<TUser>,
) => {
  const result = await userModel.findByIdAndUpdate(userId, updateUser, {
    new: true,
  });
  return result;
};

const singleUserDeleteToBd = async (userId: string) => {
  const result = await userModel.findByIdAndDelete(userId);
  return result;
};

export const userService = {
  createUserInToBD,
  getAllUsersInToBD,
  getSingleUserToBd,
  singleUserUpdeteToBd,
  singleUserDeleteToBd,
};
