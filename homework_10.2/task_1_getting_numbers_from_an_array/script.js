const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const array = [];

function getEnevNumbers(arr) {
arr.map((el) => {
    if(el % 2 === 0) {
        array.push(el);
    }
});
return array
}


const even = getEnevNumbers(arr);
console.log(even); // [2, 4, 6, 8]