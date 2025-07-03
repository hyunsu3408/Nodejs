// 유저 모델
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// 아이디와 비밀번호 스키마
const UserSchema = new Schema({
    username:{
        type:String,
        required: true,
        unique : true
    },
    password :{
        type:String,
        required:true
    }
});

module.exports = mongoose.model("User",UserSchema);