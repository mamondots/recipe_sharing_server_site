import httpStatus from 'http-status';
import { catchAsync } from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { RatingService } from './rating.service';

const createRating = catchAsync(async (req, res) => {
  const ratingData = req.body;
  const result = await RatingService.createRatingToBd(ratingData);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Rating created successfully',
    data: result,
  });
});

const getAllRating = catchAsync(async (req, res) => {
  const result = await RatingService.getAllRatingToBd();
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Ratings retrieved successfully',
    data: result,
  });
});

const getSingleRating = catchAsync(async (req, res) => {
  const ratingId = req.params.id;
  const result = await RatingService.getSingleRatingToBd(ratingId);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Rating retrieved successfully',
    data: result,
  });
});

const singleRatingUpdate = catchAsync(async (req, res) => {
  const { id } = req.params;

  const result = await RatingService.singleRatingUpdeteToBd(id, req.body);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Rating updated successfully',
    data: result,
  });
});

const singleRatingDelete = catchAsync(async (req, res) => {
  const { id } = req.params;

  const result = await RatingService.singleRatingDeleteToBd(id);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Rating deleted successfully',
    data: result,
  });
});

const getTotalRating = catchAsync(async (req, res) => {
  const total = await RatingService.getTotalRating();
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Total rating calculated successfully',
    data: total,
  });
});

export const RatingController = {
  createRating,
  getAllRating,
  getSingleRating,
  singleRatingUpdate,
  singleRatingDelete,
  getTotalRating,
};
