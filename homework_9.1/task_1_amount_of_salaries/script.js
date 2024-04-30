const conmpany = {
    sales: [
        { name: 'Jhon', salary: 1000 }, 
        { name: 'Alice', salary: 600 },
        { name: 'Bob', salary: 1200 }
    ],
    development: {
        web: [
            { name: 'Peter', salary: 2000 },
            { name: 'Alex', salary: 1800 },
            { name: 'Max', salary: 600 },
        ],
        internals: [ 
            { name: 'Jack', salary: 1300 } 
        ]
    }
};

function totalSales(conmpany) {
    let sum = 0;

    for (let key in conmpany) {
        if (Array.isArray(conmpany[key])) {
            sum += conmpany[key].reduce((acc, curr) => acc + curr.salary, 0);
        } else if (typeof conmpany[key] === 'object') {
            sum += totalSales(conmpany[key]);
        }
    }
    return sum;
}

const total = totalSales(conmpany);
console.log(total);