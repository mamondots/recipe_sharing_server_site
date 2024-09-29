import { TUpvored } from './upvotedownvote.interface';
import { upvoredModel } from './upvotedownvote.model';

const createUpvotedToBd = async (upvoted: TUpvored) => {
  const result = await upvoredModel.create(upvoted);
  return result;
};

const getAllUpvotedToBd = async () => {
  const result = await upvoredModel.find();
  return result;
};

export const upvotedService = {
  createUpvotedToBd,
  getAllUpvotedToBd,
};
