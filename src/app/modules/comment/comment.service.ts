import { TComment } from './comment.interface';
import { commentdModel } from './comment.model';

const createcommetToBd = async (comment: TComment) => {
  const result = await commentdModel.create(comment);
  return result;
};

const getAllcommetToBd = async () => {
  const result = await commentdModel.find();
  return result;
};

const getSinglecommetToBd = async (commetId: string) => {
  const result = await commentdModel.findById(commetId);
  return result;
};

const singleCommentUpdeteToBd = async (
  commetId: string,
  updateComment: Partial<TComment>,
) => {
  const result = await commentdModel.findByIdAndUpdate(
    commetId,
    updateComment,
    {
      new: true,
    },
  );
  return result;
};

const singleCommentDeleteToBd = async (commetId: string) => {
  const result = await commentdModel.findByIdAndDelete(commetId);
  return result;
};

export const commentService = {
  createcommetToBd,
  getAllcommetToBd,
  getSinglecommetToBd,
  singleCommentUpdeteToBd,
  singleCommentDeleteToBd,
};
