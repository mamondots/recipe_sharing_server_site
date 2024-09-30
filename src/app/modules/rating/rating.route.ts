import express from 'express';
import { RatingController } from './rating.controller';

const router = express.Router();

router.post('/', RatingController.createRating);
router.get('/', RatingController.getAllRating);
router.get('/totalrating', RatingController.getTotalRating);
router.get('/:id', RatingController.getSingleRating);
router.put('/:id', RatingController.singleRatingUpdate);
router.delete('/:id', RatingController.singleRatingDelete);

export const RatingRoutes = router;
