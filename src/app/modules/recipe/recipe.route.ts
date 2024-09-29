import express from 'express';
import { recipeController } from './recipe.controller';

const router = express.Router();

router.post('/', recipeController.createRecipe);
router.get('/', recipeController.getAllRecipe);
router.get('/:id', recipeController.getSingleRecipe);
router.put('/:id', recipeController.singleRecipeUpdate);
router.delete('/:id', recipeController.singleRecipeDelete);

export const recipeRoutes = router;
