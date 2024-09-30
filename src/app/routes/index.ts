import express from 'express';
import { recipeRoutes } from '../modules/recipe/recipe.route';
import { upvotedRoutes } from '../modules/upvotedownvote/upvotedownvote.route';
import { CommentRoutes } from '../modules/comment/comment.route';
import { RatingRoutes } from '../modules/rating/rating.route';
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
  {
    path: '/comment',
    route: CommentRoutes,
  },
  {
    path: '/rating',
    route: RatingRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));
export default router;
