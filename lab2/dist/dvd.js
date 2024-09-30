"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DVD = void 0;
class DVD {
    constructor(title, author, duration) {
        this.isBorrowed = false;
        this.title = title;
        this.author = author;
        this.duration = duration;
    }
    borrow() {
        this.isBorrowed = true;
        console.log(`${this.title} has been borrowed.`);
    }
    getDetails() {
        return `${this.title} by ${this.author}, Duration: ${this.duration} minutes`;
    }
}
exports.DVD = DVD;
//# sourceMappingURL=dvd.js.map