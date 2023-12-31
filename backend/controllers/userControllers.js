const expressAsyncHandler=require('express-async-handler')
const User=require('../models/userModel')
const generateToken=require('../config/generateToken')
const registerUser=expressAsyncHandler(async(req,res)=>{
    const {name,email,password,pic}=req.body;

    if(!name||!email||!password){
        res.status(400)
        throw new Error('Please enter all the details')
    }
    const userExists= await User.findOne({email});
    if(userExists){
        res.status(400)
        throw new Error('User already exists')
    }
    const user=User.create({
        name,email,password,pic
    })
    if(user){
        res.status(201).json({
           _id:user._id,
           name:user.name,
           email:user.email,
           password:user.password,
           pic:user.pic,
           token:generateToken(user._id)
        })
    }
    else{
        res.status(400)
        throw new Error('Failed to create user')
    }
})

const loginUser=expressAsyncHandler(async(req,res)=>{
    const {email,password} = req.body
    const user=await User.findOne({email})
    if(user && (await user.matchPassword(password))){
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            picture: user.picture,
            token:generateToken(user._id)

        })
    }
    else{
        res.status(401)
        throw new Error("Invalid name or password")
    }
})
module.exports ={registerUser,loginUser}