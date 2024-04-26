let numOrStr = prompt('input number or string');

console.log(numOrStr)  

switch (numOrStr) {
    case null: {
        console.log('ви скасували')
        break;
    }
    case '':
    case ' ': {
        console.log('Empty String')
        break;
    }
    default: {
        if (isNaN(+numOrStr)) {
            console.log(' number is Ba_NaN')
        } else {
            console.log('OK!')
        }
        break;
    }
} 