// 미들웨어 사용하기
// routes/contatRoute.js 파일 가져오기

const express = require('express');
const app = express();

app.get("/",(res,req)=>{

})


app.use("/contacts",require("C:\\Users\\hyunsu\\study\\Nodejs\\routes\\contactRoute"));
app.listen(3000, ()=>{
    console.log("서버 실행 중");
})
