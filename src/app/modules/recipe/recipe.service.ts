import { TImageFiles } from '../../interfaces/image.interface';
import { TRecipe } from './recipe.interface';
import { recipeModel } from './recipe.model';

const createRecipeToBd = async (recipe: TRecipe, images: TImageFiles) => {
  const { itemImages } = images;
  recipe.images = itemImages.map((image) => image.path);
  const result = await recipeModel.create(recipe);
  return result;
};

const getAllRecipeToBd = async () => {
  const result = await recipeModel.find();
  return result;
};

const getSingleRecipeToBd = async (recipeId: string) => {
  const result = await recipeModel.findById(recipeId);
  return result;
};

const singleRecipeUpdeteToBd = async (
  recipeId: string,
  updateRecipe: Partial<TRecipe>,
) => {
  const result = await recipeModel.findByIdAndUpdate(recipeId, updateRecipe, {
    new: true,
  });
  return result;
};

const singleRecipeDeleteToBd = async (recipeId: string) => {
  const result = await recipeModel.findByIdAndDelete(recipeId);
  return result;
};

export const recipeService = {
  createRecipeToBd,
  getAllRecipeToBd,
  getSingleRecipeToBd,
  singleRecipeUpdeteToBd,
  singleRecipeDeleteToBd,
};
