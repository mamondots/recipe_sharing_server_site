import { TRecipe } from './recipe.interface';
import { recipeModel } from './recipe.model';

const createRecipeToBd = async (recipe: TRecipe) => {
  const result = await recipeModel.create(recipe);
  return result;
};
export const recipeService = {
  createRecipeToBd,
};
