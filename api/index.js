import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();



// mongoconnect
mongoose.connect(process.env.MONGO).then(()=>{
  console.log("Connected to MongoDB");
}).catch((err)=>{
  console.log(err);
})




const app=express();
const port=4000
app.get('/',(req,res)=>{
  res.send("Welcome")
})
app.listen(port,()=>{
  console.log(`Server running on port:${port}`);
})
