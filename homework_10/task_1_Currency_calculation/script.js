let userCurrency = prompt('Введіть валюту, яку хочете порахувати. Долар, Євро, Злотий.');
let money = '';

if (userCurrency === null) {
    console.log("Скасовано");
} else if (userCurrency.trim() === "") {
    console.log('Порожня стрічка')
} else {
    switch (userCurrency) {
        case 'Долар':
            for(let i = 10; i < 110; i+= 10 ) {
                money = money + " " + i * 26;
            }
            console.log(money);
            break;
    
        case 'Євро':
            let i = 10;
            while (i < 100) {
                i+= 10;
                money = money + " " + i * 41;
            }
            console.log(money);
            break;
    
        case 'Злотий':
            let j = 10;
            do {
                j+= 10;
                money = money + " " + j * 10;
            } while (j < 100)
            console.log(money);
            break;
    }
}
