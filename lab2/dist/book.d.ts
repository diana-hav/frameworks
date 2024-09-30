import { LibraryItem } from './library_item';
export declare class Book implements LibraryItem {
    title: string;
    author: string;
    private pages;
    private isBorrowed;
    constructor(title: string, author: string, pages: number);
    borrow(): void;
    getDetails(): string;
}
//# sourceMappingURL=book.d.ts.map