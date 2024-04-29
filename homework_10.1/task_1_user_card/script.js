// const user = {
//     name: 'Andrey',
//     surname: 'Kovalenko',
//     city: "Kharkiv",
//     showUser() {
//             return {
//                 name: this.name,
//                 surname: this.surname,
//                 city: this.city,
//         }
//     }
// }

// console.log(user.showUser());

function User(name, surname, city) {
    this.name = name;
    this.surname = surname;
    this.city = city;
}

User.prototype.getInfo = function() {
    return {
        name: this.name,
        surname: this.surname,
        city: this.city,
    }
}

const user = new User("Andrey", "kovalenko", "kharkiv");

console.log(user.getInfo());