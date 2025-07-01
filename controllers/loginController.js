const asyncHandler = require("express-async-handler")
const User = require("../models/userModel.js");
//비밀번호 암호화 모듈
const bcrypt = require("bcrypt");

// Get login page
// GET/
const getLogin = (req,res)=>{
    res.render("home.ejs")
};


// login user
// post
const loginuser = asyncHandler((req,res)=>{
    const { username, password } = req.body;

    if(username == "admin" && password == "1234"){
        res.send("Login Success")
    }
    else{
        res.send("login Failed")
    }
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