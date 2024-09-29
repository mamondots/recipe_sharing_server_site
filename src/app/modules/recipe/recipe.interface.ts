import { ObjectId, Types } from 'mongoose';

export type TRecipe = {
  title: string;
  description: string;
  ingredients: string[];
  instructions: string;
  image: string[];
  author: ObjectId;
  ratings: number[];
  comments: ObjectId[];
  upvotes: ObjectId[];
  downvotes: ObjectId[];
  premiumContent: boolean;
};
