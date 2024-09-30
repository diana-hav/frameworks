import { LibraryItem } from './library_item';
export declare class Magazine implements LibraryItem {
    title: string;
    author: string;
    private issueNumber;
    private isBorrowed;
    constructor(title: string, author: string, issueNumber: number);
    borrow(): void;
    getDetails(): string;
}
//# sourceMappingURL=magazine.d.ts.map