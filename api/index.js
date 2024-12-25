import express from 'express';
import mongoose from 'mongoose';

import dotenv from 'dotenv';

// importroutes
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';


dotenv.config();




// mongoconnect
mongoose.connect(process.env.MONGO).then(()=>{
  console.log("Connected to MongoDB");
}).catch((err)=>{
  console.log(err);
})




const app=express();
app.use(express.json());
const port=4000

app.listen(port,()=>{
  console.log(`Server running on port:${port}`);
})


//api routing

// app.get('/test',(req,res)=>{
//   res.send("Hello World")
// })

app.use('/api/user',userRouter)
app.use('/api/auth',authRouter)