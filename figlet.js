console.log("Hello world!")

// 처음에 npm init 으로 초기화
// figlet module을 사용하기 위해 npm install figlet

// figlet => 아스키 코드로 그려줌
// figlet 예제 사용해보기
var figlet = require("figlet");

figlet("HYUN SU!!", function (err, data) {
    if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
}
    console.log(data);
});
