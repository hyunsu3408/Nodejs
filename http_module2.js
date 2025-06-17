//HTTP 모듈로 서버 만들고 실행하기

const http = require('http');

// 응답에 hello Node 써보기
const server = http.createServer((req,res)=>{
    res.setHeader('Content-type','text/plain');
    res.write('hello Node');    
    res.end();
});

server.listen(3000, ()=>{
    console.log('서버가 실행 중')
});
