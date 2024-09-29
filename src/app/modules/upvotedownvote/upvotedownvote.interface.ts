import { ObjectId } from 'mongoose';

export type TUpvored = {
  upvotes: number;
  downvotes: number;
  author: ObjectId;
};
