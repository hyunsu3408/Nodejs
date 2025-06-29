// 미들웨어 사용하기
// routes/contatRoute.js 파일 가져오기

require("dotenv").config();
const express = require('express');
// dbconnect.js 파일의 dbConnect 함수 가져오기
const dbConnect = require('../config/dbconnect');
const methodOverride=require("method-override")
const app = express();

// 템플릿엔진 연결
// npm i ejs로 템플릿 엔진 다운
app.set("view engine","ejs")
app.set("views","./views");

// 정적인 폴더랑 연결
app.use(express.static("./public"))

console.log(process.env.DB_CONNECT)
// 몽고DB연결
dbConnect();

app.get("/",(req,res)=>{
})


// 외부의 json과 url을 읽기
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// get에서 경로를 use안에 사용 가능
app.use(methodOverride("_method"));
app.use("/contacts",require("../routes/contactRoute"));
app.listen(3000, ()=>{
    console.log("서버 실행 중");
})
