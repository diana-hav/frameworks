export class Library<T> {
  private items: T[] = [];

  addItem(item: T): void {
    this.items.push(item);
  }

  removeItem(index: number): void {
    if (index >= 0 && index < this.items.length) {
      this.items.splice(index, 1);
    }
  }

  findItem(callback: (item: T) => boolean): T | undefined {
    return this.items.find(callback);
  }

  getItems(): T[] {
    return this.items;
  }

  findBooksByTitleOrAuthor(searchTerm: string): T[] {
    return this.items.filter(
      (item: any) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.author.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  }
}
