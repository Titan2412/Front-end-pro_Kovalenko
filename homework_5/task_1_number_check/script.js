const userNumber = prompt(' write number');

if(userNumber < 1000) {
    if(isNaN(userNumber)) {
        alert('Введіть число')
    } else if (userNumber === null || userNumber === '' || userNumber === ' ') {
        alert('Введіть число')
    } else if (userNumber.length <= 2) {
        alert('Введіть число від 2')
    } else {
        if(userNumber[0] === userNumber[1] && userNumber[1] === userNumber[2]) {
            alert('Усі цифри однакові')
        } else if (userNumber[0] === userNumber[1] || userNumber[0] === userNumber[2] || userNumber[1] === userNumber[2]) {
            alert("Дві цифри однакові")
        } 
    }
} else if (userNumber >= 1000) {
    alert('Введіть число менше 1000')
} else {
    alert('Введіть число')
}