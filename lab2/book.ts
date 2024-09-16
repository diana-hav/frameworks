import { LibraryItem } from './library_item';

export class Book implements LibraryItem {
    title: string;
    author: string;
    private pages: number;
    private isBorrowed: boolean = false;

    constructor(title: string, author: string, pages: number) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }

    borrow(): void {
        this.isBorrowed = true;
        console.log(`${this.title} has been borrowed.`);
    }

    getDetails(): string {
        return `${this.title} by ${this.author}, ${this.pages} pages`;
    }
}
