const array = [{}, 1, 2, 3, 4, 5, 6, 'string', null];

function foo(array) {
    let numbers = [];
    array.forEach((el) => {
        if (typeof array[el] === 'number') {
        numbers.push(array[el]);
    }
    });
    
    let sum = 0;
    for(let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    return sum / numbers.length;
}

const result = foo(array);

console.log(result);
