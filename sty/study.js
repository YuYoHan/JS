let name = '채원';
console.log(name);

let ive = '아이브';
console.log(ive);

ive = '안유진은\n사랑이다.';
console.log(ive);
console.log(typeof ive);

const newJeans = '뉴진스';

let string = 'Hello';
let search = 'l';
let index;
let count = 0;

for (let i = 0; i < string.length; i++) {
    // 문자여ㅑㄹ의 개별 문자가 'l'이면
    if(string[i] === search) {
        index = i;
        // 반복문 탈출
        break;
    }
}

for (let i = 0; i < string.length; i++) {
    if(string[i] !== search) continue;
    count++;
}


