import express from 'express';
import { CommentController } from './comment.controller';

const router = express.Router();

router.post('/', CommentController.createComment);
router.get('/', CommentController.getAllComment);
router.get('/:id', CommentController.getSingleComment);
router.put('/:id', CommentController.singleCommentUpdate);
router.delete('/:id', CommentController.singleCommentDelete);

export const CommentRoutes = router;
