import express from 'express';
import { recipeController } from './recipe.controller';

const router = express.Router();

router.post('/', recipeController.createRecipe);

export const recipeRoutes = router;
