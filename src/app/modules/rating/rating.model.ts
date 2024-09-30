import { model, Schema } from 'mongoose';
import { TRating } from './rating.interface';

const ratingSchema = new Schema<TRating>(
  {
    rating: { type: Number, required: true },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  { timestamps: true },
);

export const ratingModel = model<TRating>('ratingModel', ratingSchema);
