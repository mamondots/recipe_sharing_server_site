import httpStatus from 'http-status';
import { catchAsync } from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { recipeService } from './recipe.service';

const createRecipe = catchAsync(async (req, res) => {
  const recipeData = req.body;
  const result = await recipeService.createRecipeToBd(recipeData);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Recipe created successfully',
    data: result,
  });
});

export const recipeController = {
  createRecipe,
};
