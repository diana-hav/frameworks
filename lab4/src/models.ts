export interface IBook {
  title: string;
  author: string;
  year: number;
  getDetails(): string;
}

export interface IUser {
  name: string;
  email: string;
  id: number;
  getInfo(): string;
}

export class Book implements IBook {
  public isBorrowed: boolean;
  public borrowedBy: number | null;

  constructor(
    public title: string,
    public author: string,
    public year: number,
    isBorrowed: boolean = false,
    borrowedBy: number | null = null,
  ) {
    this.isBorrowed = isBorrowed;
    this.borrowedBy = borrowedBy;
  }

  getDetails(): string {
    return `${this.title} написана ${this.author} у ${this.year} році`;
  }
}

export class User implements IUser {
  name: string;
  email: string;
  id: number;
  public borrowedBooks: Book[];

  constructor(
    name: string,
    email: string,
    id: number,
    borrowedBooks: Book[] = [],
  ) {
    this.id = id; // Приймаємо ID як параметр
    this.name = name;
    this.email = email;
    this.borrowedBooks = borrowedBooks;
  }

  getInfo(): string {
    return `${this.name} - ${this.email} (ID: ${this.id})`;
  }

  canBorrowMoreBooks(): boolean {
    return this.borrowedBooks.length < 3;
  }

  borrowBook(book: Book): void {
    if (this.canBorrowMoreBooks()) {
      this.borrowedBooks.push(book);
      book.isBorrowed = true;
      book.borrowedBy = this.id;
    } else {
      console.log("Користувач не може позичити більше трьох книг.");
    }
  }

  returnBook(book: Book): void {
    this.borrowedBooks = this.borrowedBooks.filter((b) => b !== book);
    book.isBorrowed = false;
    book.borrowedBy = null;
  }
}
