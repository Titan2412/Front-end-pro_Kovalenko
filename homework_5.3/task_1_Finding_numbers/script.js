const numbers = prompt("Введіть целое число", "100");

if (numbers === null) {
    console.log("Скасовано");
} else if (numbers.trim() === "") {
    console.log('Порожня стрічка')
} else if (isNaN(+numbers)) {
    console.log('Не є числом')
} else {
    for(let i = 1; i < 100; i++) {
        if(i * i <= numbers) {
            console.log(i);
        }
    }
}