// path 모듈

// path 모듈 설명
// 경로를 나누거나 합칠 수 있다.
// 경로 구분자를 통일 할 수 있다.

const path = require('path');

// join 함수
// - 경로를 합쳐줌
const fullpath = path.join('some','work','ex.txt')
console.log(fullpath);

// 경로만 추출 - dirname
const dir = path.dirname(fullpath)
console.log(dir)

// 파일 이름만 추출 - basename
const fn1 = path.basename(__filename)

// 전체 경로
console.log(`전체 경로(__filename):${__filename}`)
console.log(fn1)

// 확장자 빼고 파일이름만 추출
const fn2 = path.basename(__filename,'.js')
console.log(fn2)