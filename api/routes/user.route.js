import express from 'express';
import { updateUser } from '../controllers/user.controller.js';
import { verifyToken } from '../utils/verifyUser.js';

const userRouter=express.Router();
// userRouter.get()
userRouter.post('/update/:id',verifyToken,updateUser)

// userRouter.get('/test',test)

export default userRouter;