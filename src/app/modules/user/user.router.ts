import express from 'express';
import { userController } from './user.controller';
import { multerUpload } from '../../config/multer.config';
const router = express.Router();

router.post('/', multerUpload.single('image'), userController.createUser);
router.get('/', userController.getAllUser);
router.get('/:id', userController.getSingleUser);
router.put('/:id', userController.singleUserUpdate);
router.delete('/:id', userController.singleUserDelete);

export const userRoutes = router;
