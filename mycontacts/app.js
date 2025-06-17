// nodemon 파일명 -> 실행과 실시간 자동저장
// ThunderClient로 테스트 해보기

const express = require('express');
const app = express();

app.get("/",(req,res)=>{
    res.send("hello Node");
})

app.get("/contacts",(req,res)=>{
    res.send("get :Contacts Page");
})

// post, put, delete
// post : 사용자가 입력한 내용을 보낸다.
app.post("/contacts",(req,res)=>{
    res.send("post :Contacts Page");
})

app.listen(3000, ()=>{
    console.log("서버 실행 중");
})

// 라우트 파라미터
// 특정 연락처 1개 가져오기
app.get('/contacts/:id',(req,res)=>{
    res.send(`view contact for id ${req.params.id}`)
})

//연락처 수정하기
app.put('/contacts/:id',(req,res)=>{
    res.send(`update contact for id ${req.params.id}`)
})

// 연락처 삭제하기
app.delete('/contacts/:id',(req,res)=>{
    res.send(`delete contact for id ${req.params.id}`)
})