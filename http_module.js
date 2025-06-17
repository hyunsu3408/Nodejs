//HTTP 모듈로 서버 만들고 실행하기

const http = require('http');

// localhost:포트번호 -> 들어가면 요청 발생
const server = http.createServer((req,res)=>{
    console.log("요청 발생")    
});

// 포트 입력
server.listen(3000, ()=>{
    console.log('서버가 실행 중')
});
