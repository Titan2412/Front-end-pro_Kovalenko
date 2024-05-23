let balance = 0;
class BankAccount {
    constructor(number) {
        this.number = number;
        balance += number
    }
    
    getBalance() {
        return balance
    }
    deposit(money) {
        return balance += money
    }
    withdraw(money) {
        return balance -= money
    }
}

const account1 = new BankAccount(1000);

console.log(account1.getBalance());
account1.deposit(500);
console.log(account1.getBalance());
account1.withdraw(200);
console.log(account1.getBalance());