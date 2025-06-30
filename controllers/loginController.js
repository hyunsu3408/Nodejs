const asyncHandler = require("express-async-handler")

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


module.exports = {getLogin,loginuser};