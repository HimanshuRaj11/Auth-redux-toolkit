const User = require("../models/userModel");
const bcrypt = require('bcryptjs');
const generateToken = require("../utils/generateToken");
const salt = bcrypt.genSaltSync(10);

exports.register = async(req,res)=>{
    const {name,email,password} = req.body;
    try {
        const user = await User.findOne({email})
        if(user){
            return res.status(301).json({msg: "User Alredy exist"})
        }
        const hashPassword = bcrypt.hashSync(password, salt);
        const newUser = await User.create({
            name,email,password:hashPassword
        })
        const token = await generateToken(JSON.stringify(newUser))
        res.cookie('jwt', token)
    
        return res.status(201).json({newUser,token,msg: "Register Successful"})
    } catch (error) {
        console.log(error);
        return res.status(503).json({Error:error, msg:"internal server error"})
    }
}

exports.login = async(req,res)=>{
    const {email, password} = req.body;
    try {
        const user = await User.findOne({email})
        if(!user){
            return res.status(404).json({msg: "User Not Found !"})
        }
        const comparePassword = await bcrypt.compareSync(password, user.password)
        if(!comparePassword){
            return res.status(404).json({msg:"Invalid credentials...!"})
        }
        const token = await generateToken(JSON.stringify(user))
        res.cookie("jwt", token)
        return res.status(200).json({user, msg:"Login Successful"})
    } catch (error) {
        console.log(error);
        return res.status(503).json({Error:error, msg:"internal server error"})
    }
}

// exports.logout = async(req,res)=>{
//     try {
//         console.log('logout');
//         res.clearCookie("jwt")
//         return res.status(200).json({msg:"Logout Successful"})
//     } catch (error) {
//         return res.status(503).json({Error:error, msg:"internal server error"})
//     }
// }

exports.getUser = async(req, res)=>{
    try {
        const user = req.user
        return res.status(200).json({user, msg:"user got"})
    } catch (error) {
        return res.status(503).json({Error:error, msg:"internal server error"})
    }
}