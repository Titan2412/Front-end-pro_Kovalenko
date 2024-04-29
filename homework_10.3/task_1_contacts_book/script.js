const book = {
    contacts: [
        {
            name: "Serhii",
            phone: "+380999999999",
            email: "example@email.com",
        },
    ],
    find: function (name) {
        this.contacts.forEach((el, i, arr) => {
            if(el.name === name) {
                console.log(el)
            }
        });
    },
    add: function (contact) {
        this.contacts.push(contact)
    },
};

book.add({name: "Andrey", phone: "+380554428711", email: "addf@email.com"})
console.log(book.contacts)
book.find("Andrey")