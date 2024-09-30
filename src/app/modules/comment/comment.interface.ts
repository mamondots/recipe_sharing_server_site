import { ObjectId } from 'mongoose';

export type TComment = {
  comment: string;
  user: ObjectId;
};
