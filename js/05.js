const yujin = {
    name : '안유진',
    year : 2003,
    group : '아이브',
}

// key 값을 가져오는 for 문
for (let key in yujin) {
    console.log(key);
}

// 값을 가져오는 for 문
const ive = ['안유진', '가을', '리즈', '레이', '장원영', '이서']
for (const member of ive) {
    console.log(member)
}
