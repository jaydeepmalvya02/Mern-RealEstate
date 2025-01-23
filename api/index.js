import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';

// importroutes
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
import listingRouter from './routes/listing.route.js';
import path from 'path';


dotenv.config();




// mongoconnect
mongoose.connect(process.env.MONGO).then(()=>{
  console.log("Connected to MongoDB");
}).catch((err)=>{
  console.log(err);
});

const __dirname=path.resolve();





const app=express();
app.use(express.json());
app.use(cookieParser())
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
app.use('/api/listing',listingRouter)

app.use(express.static(path.join(__dirname,'/client/dist')))
app.get('*',(req,res)=>{
  res.sendFile(path.join(__dirname,'client','dist','index.html'))
});
//middleware

app.use((err,req,res,next)=>{
  const statusCode=err.statusCode ||500;
  const message=err.message || 'Internal Server Error';

return res.status(statusCode).json({
  success:false,
  statusCode,
  message

});
});

import events from 'events';

const emitter = new events.EventEmitter();
emitter.setMaxListeners(20); // 20 listeners ki limit set karein

// Listener add karein
emitter.on('exit', () => console.log('Exiting process...'));

// Event trigger karein
emitter.emit('exit');
