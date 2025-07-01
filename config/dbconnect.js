require("dotenv").config(); //환경변수 가져오기
// 몽고 디비 연결위해 mongoose 모듈 사용
const mongoose = require("mongoose")

//비동기 처리
// async , await
const dbConnect = async()=>{
    try{
    // 커넥트 기다린 후에 log 띄우기 위해 await 사용
    const connect = await mongoose.connect(process.env.DB_CONNECT);
    console.log("DB Connected")
    }
    catch(err){
    console.log(err)
    console.log("연결 실패")
    }
}


module.exports = dbConnect;