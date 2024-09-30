"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Library = void 0;
class Library {
    constructor() {
        this.items = [];
    }
    addItem(item) {
        this.items.push(item);
        console.log(`Item ${item.title} added to the library.`);
    }
    findItemByName(name) {
        return this.items.find(item => item.title === name);
    }
    listAvailableItems() {
        this.items.forEach(item => {
            console.log(item.getDetails());
        });
    }
}
exports.Library = Library;
//# sourceMappingURL=library.js.map