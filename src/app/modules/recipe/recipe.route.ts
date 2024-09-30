import express from 'express';
import { recipeController } from './recipe.controller';
import { multerUpload } from '../../config/multer.config';

const router = express.Router();

router.post(
  '/',
  multerUpload.fields([{ name: 'itemImages' }]),
  recipeController.createRecipe,
);
router.get('/', recipeController.getAllRecipe);
router.get('/:id', recipeController.getSingleRecipe);
router.put('/:id', recipeController.singleRecipeUpdate);
router.delete('/:id', recipeController.singleRecipeDelete);

export const recipeRoutes = router;
