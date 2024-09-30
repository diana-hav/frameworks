"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
class Book {
    constructor(title, author, pages) {
        this.isBorrowed = false;
        this.title = title;
        this.author = author;
        this.pages = pages;
    }
    borrow() {
        this.isBorrowed = true;
        console.log(`${this.title} has been borrowed.`);
    }
    getDetails() {
        return `${this.title} by ${this.author}, ${this.pages} pages`;
    }
}
exports.Book = Book;
//# sourceMappingURL=book.js.map