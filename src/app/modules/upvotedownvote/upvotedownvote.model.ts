import { model, Schema } from 'mongoose';
import { TUpvored } from './upvotedownvote.interface';

const upvoredSchema = new Schema<TUpvored>(
  {
    upvotes: { type: Number, default: 0 },
    downvotes: { type: Number, default: 0 },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  { timestamps: true },
);

export const upvoredModel = model<TUpvored>('upvoredModel', upvoredSchema);
