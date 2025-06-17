// fs 모듈의 readdir 함수 연습하기

const fs = require('fs');

// 현재 디렉토리 내 파일 찾기
fs.readdir('./',(err,files)=>{
    if(err){
        console.log(err);
    };
    console.log(files);
});

// 파일 읽기 = readFile
// 인코딩을 지정해주어야 함
fs.readFile('./path_module.js',"utf-8",(err,data)=>{
    if(err){
        console.log(err)
    }
    console.log(data)
    //파일 쓰기 = writeFile
    fs.writeFile("./test.txt",data,(err)=>{
        if (err){
            console.log(err)
        }
        console.log('text.txt is saved')
    })
});