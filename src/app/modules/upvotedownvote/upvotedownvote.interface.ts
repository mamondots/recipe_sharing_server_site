import { ObjectId } from 'mongoose';

export type TUpvored = {
  upvotes: number;
  downvotes: number;
  user: ObjectId;
};
