import { Book, User } from './models';
import { Library } from './library';
import { LocalStorageService } from './services';
import { FormValidator } from './validation';
import { ModalManager } from './modal';

class App {
    private bookLibrary: Library<Book>;
    private userLibrary: Library<User>;
    private storage: LocalStorageService;
    private modalManager: ModalManager;
    private formValidator: FormValidator;

    constructor() {
        this.bookLibrary = new Library<Book>();
        this.userLibrary = new Library<User>();
        this.storage = new LocalStorageService();
        this.modalManager = new ModalManager();
        this.formValidator = new FormValidator();

        this.loadData();
        this.setupEventListeners();
    }

    private loadData(): void {
        this.loadItems('books', this.bookLibrary, Book);
        this.loadItems('users', this.userLibrary, User, this.setupUserBooks);
        this.renderLists();
    }

    private loadItems<T>(key: string, library: Library<T>, Model: new (...args: any[]) => T, extraSetup?: (itemData: any, item: T) => void): void {
        const savedItems = this.storage.getItem(key);
        if (savedItems) {
            savedItems.forEach((itemData: any) => {
                const item = new Model(...Object.values(itemData));
                if (extraSetup) extraSetup(itemData, item);
                library.addItem(item);
            });
        }
    }    

    private setupUserBooks(userData: any, user: User): void {
        user.borrowedBooks = userData.borrowedBooks.map((bookData: any) => new Book(bookData.title, bookData.author, bookData.year, bookData.isBorrowed, bookData.borrowedBy));
    }

    private renderLists(): void {
        this.renderList('book-list-items', this.bookLibrary.getItems(), this.createBookListItem.bind(this));
        this.renderList('user-list-items', this.userLibrary.getItems(), this.createUserListItem.bind(this));
    }

    private renderList<T>(elementId: string, items: T[], createItem: (item: T, index: number) => HTMLElement): void {
        const list = document.getElementById(elementId) as HTMLElement;
        list.innerHTML = '';
        items.forEach((item, index) => list.appendChild(createItem(item, index)));
    }

    private createBookListItem(book: Book, index: number): HTMLElement {
        const listItem = document.createElement('li');
        listItem.className = 'list-group-item d-flex justify-content-between';
        listItem.innerHTML = `
            <span>${book.title} - ${book.author} (${book.year})</span>
            <div class="gap-2 d-md-flex justify-content-md-end">
                <button type="button" class="btn ${book.isBorrowed ? 'btn-warning' : 'btn-primary'} borrow-btn" data-index="${index}" ${book.isBorrowed ? `data-user-id="${book.borrowedBy}"` : ''}>${book.isBorrowed ? 'Повернути' : 'Позичити'}</button>
                <button class="delete-book-btn btn btn-danger" data-index="${index}" ${book.isBorrowed ? 'disabled' : ''}>Видалити</button>
            </div>`;
        return listItem;
    }
    
    private createUserListItem(user: User, index: number): HTMLElement {
        const listItem = document.createElement('li');
        listItem.className = 'list-group-item d-flex justify-content-between';
        listItem.innerHTML = `
            <span>${user.name} - ${user.email} (ID: ${user.id})</span>
            <div class="d-md-flex justify-content-md-end">
                <button class="delete-user-btn btn btn-danger" data-index="${index}">Видалити</button>
            </div>`;
        return listItem;
    }
        

    private setupEventListeners(): void {
        this.setupFormEvent('book-form', this.addBook.bind(this));
        this.setupFormEvent('user-form', this.addUser.bind(this));

        document.getElementById('book-list-items')?.addEventListener('click', (event) => this.handleBookActions(event));
        document.getElementById('user-list-items')?.addEventListener('click', (event) => this.handleUserActions(event));

        const borrowButton = document.getElementById('saveButton');
        if (borrowButton) {
            borrowButton.addEventListener('click', () => {
                const bookIndex = parseInt(borrowButton.getAttribute('data-index') || '0');
                const userIdInput = document.getElementById('user-id') as HTMLInputElement;
                const userId = parseInt(userIdInput.value);
                this.checkUserAndBorrow(bookIndex, userId);
            });
        }

        const searchButton = document.getElementById('search') as HTMLButtonElement;
        searchButton.addEventListener('click', () => this.searchBooks());
    }
    
    private searchBooks(): void {
        const searchTerm = (document.getElementById('book-to-search') as HTMLInputElement).value;
        console.log('Пошуковий запит:', searchTerm); // Додайте цю строку
        const foundBooks = this.bookLibrary.findBooksByTitleOrAuthor(searchTerm);
        
        const list = document.getElementById('book-list-items') as HTMLElement;
        list.innerHTML = '';
        
        if (foundBooks.length > 0) {
            foundBooks.forEach((book, index) => list.appendChild(this.createBookListItem(book, index)));
        } else {
            list.innerHTML = '<li class="list-group-item">Книги не знайдено</li>';
        }
    }

    private setupFormEvent(formId: string, submitHandler: () => void): void {
        document.getElementById(formId)?.addEventListener('submit', (event) => {
            event.preventDefault();
            if (this.formValidator.validateForm(formId)) submitHandler();
        });
    }

    private handleBookActions(event: Event): void {
        const target = event.target as HTMLElement;
        const index = target.getAttribute('data-index');
        if (!index) return;
        const bookIndex = parseInt(index);

        if (target.classList.contains('borrow-btn')) {
            const userId = target.getAttribute('data-user-id');
            userId ? this.returnBook(bookIndex, parseInt(userId)) : this.setupBorrow(bookIndex);
        } else if (target.classList.contains('delete-book-btn')) {
            this.bookLibrary.removeItem(bookIndex);
            this.saveAndRenderBooks();
        }
    }

    private handleUserActions(event: Event): void {
        const target = event.target as HTMLElement;
        const index = target.getAttribute('data-index');
        if (!index) return;
    
        const user = this.userLibrary.getItems()[parseInt(index)];
    
        if (user && user.borrowedBooks.length > 0) {
            const borrowedBooks = user.borrowedBooks.map((book) => book.title).join(', ');
            this.modalManager.setModalContent('exampleModalToggle2', `Щоб видалити користувача, поверніть: ${borrowedBooks}`);
            this.modalManager.open('exampleModalToggle2');
        } else {
            this.userLibrary.removeItem(parseInt(index));
            this.saveAndRenderUsers();
        }
    }    

    private setupBorrow(bookIndex: number): void {
        const saveButton = document.getElementById('saveButton') as HTMLButtonElement;
        saveButton.setAttribute('data-index', bookIndex.toString());

        this.modalManager.open('exampleModal');
    }

    private addBook(): void {
        const title = (document.querySelector('input[placeholder="Назва книги"]') as HTMLInputElement).value;
        const author = (document.querySelector('input[placeholder="Автор"]') as HTMLInputElement).value;
        const year = (document.querySelector('input[placeholder="Рік видання"]') as HTMLInputElement).value;

        const book = new Book(title, author, parseInt(year, 10));
        this.bookLibrary.addItem(book);
        this.modalManager.setModalContent('exampleModalToggle2', `Книжку ${book.title} додано!`);
        this.modalManager.open('exampleModalToggle2');
        this.saveAndRenderBooks();
    }

    private addUser(): void {
        const name = (document.querySelector('input[placeholder="Ім\'я"]') as HTMLInputElement).value;
        const email = (document.querySelector('input[placeholder="Email"]') as HTMLInputElement).value;

        const userId = this.generateRandomId();
        const user = new User(name, email, userId);
        this.userLibrary.addItem(user);
        this.modalManager.setModalContent('exampleModalToggle2', `Користувача ${user.name} з ID: ${userId} додано!`);
        this.modalManager.open('exampleModalToggle2');
        this.saveAndRenderUsers();
    }

    private generateRandomId(): number {
        return Math.floor(10000000 + Math.random() * 90000000);
    }

    private saveAndRenderBooks(): void {
        this.storage.setItem('books', this.bookLibrary.getItems());
        this.renderLists();
    }

    private saveAndRenderUsers(): void {
        this.storage.setItem('users', this.userLibrary.getItems());
        this.renderLists();
    }    

    private checkUserAndBorrow(bookIndex: number, userId: number): void {
        const book = this.bookLibrary.getItems()[bookIndex];
        const user = this.userLibrary.getItems().find(u => u.id === userId);
    
        if (!user) {
            this.modalManager.setModalContent('exampleModalToggle2', 'Користувача з таким ID не існує!');
            this.modalManager.open('exampleModalToggle2');
            return;
        }
    
        if (user.borrowedBooks.length >= 3) {
            this.modalManager.setModalContent('exampleModalToggle2', 'Користувач вже має 3 позичені книги!');
            this.modalManager.open('exampleModalToggle2');
            return;
        }
    
        user.borrowBook(book);
        book.isBorrowed = true;
        book.borrowedBy = userId;
        this.saveAndRenderBooks();
        this.saveAndRenderUsers();
    
        this.modalManager.setModalContent('exampleModalToggle2', `Книгу ${book.title} позичено користувачу ${user.name}!`);
        this.modalManager.open('exampleModalToggle2');
    }

    private returnBook(bookIndex: number, userId: number): void {
        const book = this.bookLibrary.getItems()[bookIndex];
        const user = this.userLibrary.getItems().find(u => u.id === userId);
    
        if (!user) {
            this.modalManager.setModalContent('exampleModalToggle2', 'Користувача з таким ID не існує!');
            this.modalManager.open('exampleModalToggle2');
            return;
        }
    
        if (book.borrowedBy === userId) {
            user.returnBook(book);
            book.isBorrowed = false;
            book.borrowedBy = null;
    
            this.saveAndRenderBooks();
            this.saveAndRenderUsers();
    
            this.modalManager.setModalContent('exampleModalToggle2', `Книгу ${book.title} повернено користувачу ${user.name}!`);
        } else {
            this.modalManager.setModalContent('exampleModalToggle2', 'Ця книга не була позичена цим користувачем!');
        }
    
        this.modalManager.open('exampleModalToggle2');
    }
}

new App();
