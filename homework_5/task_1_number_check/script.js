const userNumber = +prompt(' write number');

// if (userNumber <= 999) {
//     if (isNaN(+userNumber)) {
//         alert('Введите число');
//     } else {
        
//     }
// } else {
//     alert('Введите трехзначное число')
// }

if (userNumber % 2) {
    alert("odinakoviy")
    console.log(userNumber);
} else {
    alert("Нету одинаковых")
    console.log(userNumber);
}