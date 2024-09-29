import express from 'express';
import { upvotedController } from './upvotedownvote.controller';

const router = express.Router();

router.post('/', upvotedController.createUpvoted);
router.get('/', upvotedController.getAllUpvoted);

export const upvotedRoutes = router;
