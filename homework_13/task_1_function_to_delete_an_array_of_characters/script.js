const message = prompt('Enter yor strinng');
const chars = prompt('Enter some chars for removing');

function foo(string, arr) {
    for(let i of arr) {
        for(let j = 0; j < string.length; j++) {
            string = string.replace(i, '')
        }
    }
    return string
}

const result = foo(message, chars);

alert(result);
