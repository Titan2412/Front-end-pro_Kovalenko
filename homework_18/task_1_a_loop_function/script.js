function printChoise() {
    let userNumber;
    let count = 0;

    while(count < 10) {
        userNumber = prompt("Введіть число більше, ніж 100")

        if (userNumber === null || isNaN(+userNumber)) {
            console.log('Введіть число')
            break
        } else if (userNumber > 100) {
            console.log(userNumber)
            break
        } else if (userNumber <= 100) {
            console.log("Ви ввели цифру менше 100")
        } 

        count++
    }

    if (userNumber <= 100 || userNumber === null || isNaN(+userNumber)) {
        console.log('Ви досягли максимальної кількості ітерацій')
    } 
}

printChoise()