function sum(number) {
    let num = 0;

    return function (number) {
        num += number;
        return num
    }
}

const sum2 = sum();

console.log(sum2(4)); // 4

console.log(sum2(6)); // 10

console.log(sum2(10)); // 20

console.log(sum2(7)); // 27