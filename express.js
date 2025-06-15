// express 프레임워크 사용해보기

// 실행 후 확인은 localhost:3000
// 서버 종료는 ctrl + c

const express = require('express')
const app = express()
const port = 3000

// HTTP메소드: GET, 라우팅 : '/' 콜백함수 : ()=>{} 
// 콜백 함수는 ()함수가 끝나고 난 뒤 {}가 실행되는 함수
// GET 요청 - 주소창(주소창에서 데이터 전달)
// POST 요청 - 주소창X (내부적으로 body에 데이터 전달)
app.get('/', (req, res) => {
    res.send('Hello World!') // res.send : 응답에 담아 보내는 것
})

// 링크,html 등등 보내기 가능
app.get('/youtube', (req, res) => {
    res.send("<a href='https://www.youtube.com'>유튜브로 이동</a>") 
})

// send로 해도 되고 json으로 해도 됨.
app.get('/dog', (req, res) => {
    res.json({'sound':'멍멍'}) 
})

app.get('/cat', (req, res) => {
    res.send('고양이!') 
})

// GET : Params, query(키,값 형태) 이용
app.get('/user/:id', (req,res) => {
    // const q = req.params
    // console.log(q.id)

    const q = req.query
    console.log(q)

    res.json({'userid:':q})
})

// port : 서버에 들어올 수 있는 입구
// listen : 서버가 켜져있는 동안 request를 계속 듣는 것
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})