const conmpany = {
    sales: [
        { name: 'Jhon', salery: 1000 }, 
        { name: 'Alice', salery: 600 },
        { name: 'Bob', salery: 1200 }
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
}

function totalSales(company) {
    if(typeof company === 'object') {
        for(let key in company) {
            for(let ket in key) {
                console.log(ket)
            }
        }
    }
    if(Array.isArray(company)) {

    }
}

const total = totalSales(conmpany);
console.log(total);