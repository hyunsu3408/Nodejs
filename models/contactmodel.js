const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
    },
    phone:{
        type:String,
        required:[true,"전화번호는 꼭 입력해주세요"]
    }

},
{
    timestamps:true
})
// time stamps -> true 하면 자동으로 시간기록이됨

// 스키마 -> 모델
// mongoose.model(모델명, 스키마명)
const Contact = mongoose.model("Contact",contactSchema)

// 모델 내보내기
module.exports = Contact;