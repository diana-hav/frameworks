import { LibraryItem } from './library_item';

export class Library {
    private items: LibraryItem[] = [];

    addItem(item: LibraryItem): void {
        this.items.push(item);
        console.log(`Item ${item.title} added to the library.`);
    }

    findItemByName(name: string): LibraryItem | undefined {
        return this.items.find(item => item.title === name);
    }

    listAvailableItems(): void {
        this.items.forEach(item => {
            console.log(item.getDetails());
        });
    }
}
