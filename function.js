//함수 선언
//방법 1
let greet = function(name){
    console.log(`${name}님 안녕하세요?`);
}
// 방법2

function greeting(name){
    console.log(`${name}님 안녕하세요?`)
}

//방법3
(function(a,b){
    console.log(`두수의 합:${a+b}`);
}(100,200));

//방법4
let hi = function(){
    return '안녕하세요?'
}

let sum = (a,b) => a+b;

// 방법5
// 돌려줄 문장이 한줄이라면 return과 {} 생략 가능
let bye = () => "메롱"


// 함수인지 확인하는 코드
console.log(typeof greeting)

// 함수 호출
greet('현수')
greeting('김현수')
console.log(hi())
console.log(bye())
console.log(sum(101,20))