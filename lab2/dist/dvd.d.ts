import { LibraryItem } from './library_item';
export declare class DVD implements LibraryItem {
    title: string;
    author: string;
    private duration;
    private isBorrowed;
    constructor(title: string, author: string, duration: number);
    borrow(): void;
    getDetails(): string;
}
//# sourceMappingURL=dvd.d.ts.map