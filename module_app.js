// require로 모듈 가져오기
const user = require('./module_user');
const hello = require('./module_hello');
// 한개 이상의 모듈을 받을 때는 중괄호로 받음
const {user1,user2} = require('./module_user1')


// module_hello,module_user에 있는 함수 사용
hello(user);
hello(user1);
hello(user2);

console.log(`현재 모듈이 있는 폴더: ${__dirname}`);
console.log(`현재 모듈이 있는 파일: ${__filename}`);