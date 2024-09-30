import { model, Schema } from 'mongoose';
import { TRecipe } from './recipe.interface';

const recipeSchema = new Schema<TRecipe>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    ingredients: [{ type: String, required: true }],
    instructions: { type: String, required: true },
    image: [{ type: String, required: true }], // Array of image URLs as strings
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    ratings: [{ type: Number, min: 1, max: 5 }],
    comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
    upvotes: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    downvotes: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    premiumContent: { type: Boolean, default: false },
  },
  { timestamps: true },
);

export const recipeModel = model<TRecipe>('recipeModel', recipeSchema);
