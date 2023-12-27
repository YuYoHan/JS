function mul(x) {
    return function (y) {
        return function (z) {
            return `x: ${x} y: ${y} z: ${z}`
        }
    }
}
console.log(mul(3)(4)(5));

// 에로우 함수
const mul2 = (x, y) => {
    return x * y;
}
console.log(mul2(4, 5))

const mul3 = function (x, y, z) {
    console.log(arguments)
    return x + y + z;
}

const mul4 = function (...arguments) {
    return Object.values(arguments).reduce((a, b) => a * b, 1)
}
console.log(mul4(3,4,5,6,7,8,9));