const doubleIt = n => n * 2;
console.log(doubleIt(10));

const printIt = name => console.log(name);
printIt("Dutta");

function add(a, b) {
    return a + b;
}

const add2 = (a, b) => a + b;

function say() {
    console.log("Hi");
}

const say1 = () => console.log("Hi");
const say2 = () => 'Hi';

const greet = (name) => {
    const message = "Hi" + name;
    return message;
}