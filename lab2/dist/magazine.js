"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Magazine = void 0;
class Magazine {
    constructor(title, author, issueNumber) {
        this.isBorrowed = false;
        this.title = title;
        this.author = author;
        this.issueNumber = issueNumber;
    }
    borrow() {
        this.isBorrowed = true;
        console.log(`${this.title} has been borrowed.`);
    }
    getDetails() {
        return `${this.title} by ${this.author}, Issue No. ${this.issueNumber}`;
    }
}
exports.Magazine = Magazine;
//# sourceMappingURL=magazine.js.map