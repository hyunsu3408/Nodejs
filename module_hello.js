const hello = (name) => {
    console.log(`${name}님 안녕하세요`)
};

// 외부에서 사용할 수 있게 모듈 지정
module.exports = hello;