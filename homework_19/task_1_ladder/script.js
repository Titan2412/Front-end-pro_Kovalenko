let count = 0;
let ladder = {
    up: function () { // підніматиме вас на одну сходинку
        count++;
        return this
    },
    down: function () { // опускатиме вас на одну сходинку
        count--;
        return this
    },
    showStep: function () { // показує поточну сходинку
        console.log(count)
        return
    }
};

// ladder.up();

// ladder.up();


// ladder.down();

// ladder.showStep(); // 1

ladder.up().up().down().showStep(); // 1