let ladder = {
    count: 0,
    up: function () { // підніматиме вас на одну сходинку
        this.count++;
        return this
    },
    down: function () { // опускатиме вас на одну сходинку
        this.count--;
        return this
    },
    showStep: function () { // показує поточну сходинку
        console.log(this.count)
        return
    }
};

// ladder.up();

// ladder.up();


// ladder.down();

// ladder.showStep(); // 1

ladder.up().up().down().showStep(); // 1