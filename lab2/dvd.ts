import { LibraryItem } from './library_item';

export class DVD implements LibraryItem {
    title: string;
    author: string;
    private duration: number;
    private isBorrowed: boolean = false;

    constructor(title: string, author: string, duration: number) {
        this.title = title;
        this.author = author;
        this.duration = duration;
    }

    borrow(): void {
        this.isBorrowed = true;
        console.log(`${this.title} has been borrowed.`);
    }

    getDetails(): string {
        return `${this.title} by ${this.author}, Duration: ${this.duration} minutes`;
    }
}
