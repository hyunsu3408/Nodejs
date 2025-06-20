// 비동기 처리
// 방법 1 : 콜백함수
// 방법 2 : 프로미스
// 방법 3 : async/await

function displayA(){
    console.log("A")
}

function displayB(callback){
    setTimeout(()=>{
        console.log("B")
        callback()
    },2000)
}

function displayC(){
    console.log("C")
}

displayA()
// 그냥 displayB()였을 경우 B함수가 C함수 보다 늦게 나오게 됨
// 따라서 displayC를 displayB함수 안에 넣어 콜백함수가 끝나고 실행되게 만듬
displayB(displayC)