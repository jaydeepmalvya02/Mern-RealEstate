import express from 'express';
import { deleteUser, updateUser, getUserListings,getUser} from '../controllers/user.controller.js';
import { verifyToken } from '../utils/verifyUser.js';

const userRouter=express.Router();
// userRouter.get()
userRouter.post('/update/:id',verifyToken,updateUser)
userRouter.delete('/delete/:id',verifyToken,deleteUser)
userRouter.get('/listings/:id',verifyToken,getUserListings)
userRouter.get('/:id',verifyToken,getUser)


// userRouter.get('/test',test)

export default userRouter;