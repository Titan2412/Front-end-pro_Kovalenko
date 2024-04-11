
let numbers = prompt("Введіть ціле число:");

if (numbers === null) {
    console.log("Скасовано");
} else if (numbers.trim() === "") {
    console.log('Порожня стрічка')
} else if (isNaN(numbers)) {
    console.log('Не є числом')
} else {
    let result = true;
    if (numbers <= 1) {
        result = false;
    } else {
        for (let i = 2; i < numbers; i++) {
            if (numbers % i === 0) {
                result = false;
            }
        }
    }
    if (result) {
        console.log(`${numbers} є простим числом.`);
    } else {
        console.log(`${numbers} не є простим числом.`);
    }
}



