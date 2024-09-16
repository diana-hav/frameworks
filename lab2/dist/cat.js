"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cat = void 0;
class Cat {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    move() {
        console.log(`${this.name} is walking`);
    }
    voice() {
        return "Meow";
    }
}
exports.Cat = Cat;
