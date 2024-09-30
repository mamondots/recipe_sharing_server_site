import { TRating } from './rating.interface';
import { ratingModel } from './rating.model';

const createRatingToBd = async (rating: TRating) => {
  const result = await ratingModel.create(rating);
  return result;
};

const getAllRatingToBd = async () => {
  const result = await ratingModel.find();
  return result;
};

const getSingleRatingToBd = async (ratingId: string) => {
  const result = await ratingModel.findById(ratingId);
  return result;
};

const singleRatingUpdeteToBd = async (
  ratingId: string,
  updateRating: Partial<TRating>,
) => {
  const result = await ratingModel.findByIdAndUpdate(ratingId, updateRating, {
    new: true,
  });
  return result;
};

const singleRatingDeleteToBd = async (ratingId: string) => {
  const result = await ratingModel.findByIdAndDelete(ratingId);
  return result;
};

const getTotalRating = async () => {
  const ratings = await getAllRatingToBd();
  if (ratings.length === 0) return 0; // Return 0 if there are no ratings

  const total = ratings.reduce((acc, rating) => acc + rating.rating, 0); // Use `rating` as number
  return total;
};

export const RatingService = {
  createRatingToBd,
  getAllRatingToBd,
  getSingleRatingToBd,
  singleRatingUpdeteToBd,
  singleRatingDeleteToBd,
  getTotalRating,
};
