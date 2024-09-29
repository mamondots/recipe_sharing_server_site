import httpStatus from 'http-status';
import { catchAsync } from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { upvotedService } from './upvotedownvote.service';

const createUpvoted = catchAsync(async (req, res) => {
  const upvotedData = req.body;
  const result = await upvotedService.createUpvotedToBd(upvotedData);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'upvotedownvote created successfully',
    data: result,
  });
});

const getAllUpvoted = catchAsync(async (req, res) => {
  const result = await upvotedService.getAllUpvotedToBd();

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'upvotedownvote retrieved successfully',
    data: result,
  });
});

export const upvotedController = {
  createUpvoted,
  getAllUpvoted,
};
