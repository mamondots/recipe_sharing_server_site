import httpStatus from 'http-status';
import { catchAsync } from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { commentService } from './comment.service';

const createComment = catchAsync(async (req, res) => {
  const CommentData = req.body;
  const result = await commentService.createcommetToBd(CommentData);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Comment created successfully',
    data: result,
  });
});

const getAllComment = catchAsync(async (req, res) => {
  const result = await commentService.getAllcommetToBd();
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Comments retrieved successfully',
    data: result,
  });
});

const getSingleComment = catchAsync(async (req, res) => {
  const CommentId = req.params.id;
  const result = await commentService.getSinglecommetToBd(CommentId);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Comment retrieved successfully',
    data: result,
  });
});

const singleCommentUpdate = catchAsync(async (req, res) => {
  const { id } = req.params;

  const result = await commentService.singleCommentUpdeteToBd(id, req.body);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Comment updated successfully',
    data: result,
  });
});

const singleCommentDelete = catchAsync(async (req, res) => {
  const { id } = req.params;

  const result = await commentService.singleCommentDeleteToBd(id);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Comment deleted successfully',
    data: result,
  });
});

export const CommentController = {
  createComment,
  getAllComment,
  getSingleComment,
  singleCommentUpdate,
  singleCommentDelete,
};
