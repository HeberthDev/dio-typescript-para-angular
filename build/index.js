"use strict";
const bot1 = {
    id: 1,
    name: "23",
};
const bot2 = {
    id: 1,
    name: "23",
    sayHello() {
        return "Hello";
    }
};
console.log(bot1);
console.log(bot2);
class Pessoa {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    sayHello() {
        return "Hello";
    }
}
const p = new Pessoa(1, "heberth");
console.log(p.sayHello());
