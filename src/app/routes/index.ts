import express from 'express';
import { recipeRoutes } from '../modules/recipe/recipe.route';
import { upvotedRoutes } from '../modules/upvotedownvote/upvotedownvote.route';
const router = express.Router();

const moduleRoutes = [
  {
    path: '/recipe',
    route: recipeRoutes,
  },
  {
    path: '/upvotedownvote',
    route: upvotedRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));
export default router;
