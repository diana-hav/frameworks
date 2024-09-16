"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fish = void 0;
class Fish {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    move() {
        console.log(`${this.name} is swimming`);
    }
}
exports.Fish = Fish;
