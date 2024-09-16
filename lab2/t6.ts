import { Book } from './book';
import { Magazine } from './magazine';
import { DVD } from './dvd';
import { Library } from './library';

const book1 = new Book('The Great Gatsby', 'F. Scott Fitzgerald', 180);
const magazine1 = new Magazine('National Geographic', 'Various Authors', 2023);
const dvd1 = new DVD('Inception', 'Christopher Nolan', 148);

const library = new Library();

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
