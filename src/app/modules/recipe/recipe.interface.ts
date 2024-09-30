import { ObjectId, Types } from 'mongoose';

export type TRecipe = {
  title: string;
  description: string;
  ingredients: string[];
  instructions: string;
  images: string[];
  user: ObjectId;
  ratings: number[];
  comments: ObjectId[];
  upvotes: ObjectId[];
  downvotes: ObjectId[];
  premiumContent: boolean;
};
