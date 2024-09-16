import { LibraryItem } from './library_item';

export class Magazine implements LibraryItem {
    title: string;
    author: string;
    private issueNumber: number;
    private isBorrowed: boolean = false;

    constructor(title: string, author: string, issueNumber: number) {
        this.title = title;
        this.author = author;
        this.issueNumber = issueNumber;
    }

    borrow(): void {
        this.isBorrowed = true;
        console.log(`${this.title} has been borrowed.`);
    }

    getDetails(): string {
        return `${this.title} by ${this.author}, Issue No. ${this.issueNumber}`;
    }
}
