"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const book_1 = require("./book");
const magazine_1 = require("./magazine");
const dvd_1 = require("./dvd");
const library_1 = require("./library");
const book1 = new book_1.Book('The Great Gatsby', 'F. Scott Fitzgerald', 180);
const magazine1 = new magazine_1.Magazine('National Geographic', 'Various Authors', 2023);
const dvd1 = new dvd_1.DVD('Inception', 'Christopher Nolan', 148);
const library = new library_1.Library();
library.addItem(book1);
library.addItem(magazine1);
library.addItem(dvd1);
library.listAvailableItems();
const searchResult = library.findItemByName('Inception');
if (searchResult) {
    console.log(`Found item: ${searchResult.getDetails()}`);
    searchResult.borrow();
}
library.listAvailableItems();
//# sourceMappingURL=t6.js.map