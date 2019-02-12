var square = x => x*x;
console.log(square(8));

var user = {
    name : 'kumar',
    sayHi : () => {
        console.log(`Hi.`);
    },
    sayHiAlt () {
        console.log(`Hi. I'm ${this.name}`);
    }
};

user.sayHiAlt();