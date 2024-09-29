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

const getAllRecipe = catchAsync(async (req, res) => {
  const result = await recipeService.getAllRecipeToBd();
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Recipes retrieved successfully',
    data: result,
  });
});

const getSingleRecipe = catchAsync(async (req, res) => {
  const recipeId = req.params.id;
  const result = await recipeService.getSingleRecipeToBd(recipeId);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Recipe retrieved successfully',
    data: result,
  });
});

const singleRecipeUpdate = catchAsync(async (req, res) => {
  const { id } = req.params;

  const result = await recipeService.singleRecipeUpdeteToBd(id, req.body);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Recipe updated successfully',
    data: result,
  });
});

const singleRecipeDelete = catchAsync(async (req, res) => {
  const { id } = req.params;

  const result = await recipeService.singleRecipeDeleteToBd(id);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Recipe deleted successfully',
    data: result,
  });
});

export const recipeController = {
  createRecipe,
  getAllRecipe,
  getSingleRecipe,
  singleRecipeUpdate,
  singleRecipeDelete,
};
