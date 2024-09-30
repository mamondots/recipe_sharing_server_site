import { ObjectId } from 'mongoose';

export type TRating = {
  rating: number;
  user: ObjectId;
};
