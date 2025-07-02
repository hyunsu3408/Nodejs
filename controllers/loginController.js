const asyncHandler = require("express-async-handler")
const User = require("../models/userModel.js");
//비밀번호 암호화 모듈
const bcrypt = require("bcrypt");
// 쿠키정보 읽어주는 모듈 cookie-parser 설치
// jsonwebtoken 모듈 설치 후 .env에 저장하기
require("dotenv").config();
const jwtSecret = process.env.JWT_SECRET;
const jwt = require("jsonwebtoken");


// Get login page
// GET/
const getLogin = (req,res)=>{
    res.render("home.ejs")
};


// login user
// post
const loginuser = asyncHandler(async(req,res)=>{
    const { username, password } = req.body;
    const user = await User.findOne({username});
    if (!user){
        return res.json({message:"일치하는 사용자가 없습니다."});
    }else{

    }

    const isMatch = await bcrypt.compare(password,user.password);
    if(!isMatch){
        return res.json({message:"비밀번호가 맞지않아요"});
    }

    const token = jwt.sign({ id: user._id },jwtSecret);
    res.cookie("token",token, {httpOnly:true});
    res.redirect("/contacts");
});

// 사용자 등록
// GET /register
const getRegister = (req,res) =>{
    res.render("register.ejs")
}

// Register user
// Post /register
const registerUser = asyncHandler(async(req,res)=>{
    const {username, password, password2} = req.body;
    if(password == password2){
        //sucess
        const hashedPassword = await bcrypt.hash(password,10);
        const user = await User.create({username:username,password:hashedPassword});
        res.json({message: "Register successful",user})
    }else{
        //failed
        res.send("Register Failed")
    }
})

// 비밀번호 암호화 하기 - bcrypt 모듈 (입력값을 해시 값으로 바꿈)

module.exports = {getLogin,loginuser
    ,getRegister,registerUser
};