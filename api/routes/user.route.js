import express from 'express';
import { User } from '../controllers/user.controller.js';

const userRouter=express.Router();

userRouter.get('/user',User)

export default userRouter;