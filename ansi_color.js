// 로그 색깔 바꾸는 프레임 워크

const c = require('ansi-colors')

function hello(name){
    console.log(c.green(name)+"님, 안녕하세요")
}
hello("현수")