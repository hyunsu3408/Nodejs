// 미들웨어 사용하기
// routes/contatRoute.js 파일 가져오기

const express = require('express');
const dbConnect = require('../config/dbconnect');
const app = express();

dbConnect();

app.get("/",(res,req)=>{

})

// 외부의 json과 url을 읽기
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// get에서 경로를 use안에 사용 가능
app.use("/contacts",require("C:\\Users\\hyunsu\\study\\Nodejs\\routes\\contactRoute"));
app.listen(3000, ()=>{
    console.log("서버 실행 중");
})
