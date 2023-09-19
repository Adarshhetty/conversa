const express=require('express');
const dotenv=require('dotenv')
const chats = require('./data/data');
const userRoutes=require('./routes/userRoutes')
const  connectDB  = require('./config/db');

dotenv.config()
connectDB()
const app=express();
app.use(express.json())
app.get('/',(req,res)=>{
res.send("API is running ")
})
app.use("/api/user", userRoutes);
const PORT=process.env.PORT||5000;
app.listen(PORT,console.log(`Server listening on port ${PORT}`))