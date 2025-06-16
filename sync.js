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
displayB(displayC)