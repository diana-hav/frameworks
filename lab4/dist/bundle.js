/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => {
  // webpackBootstrap
  /******/ "use strict";
  /******/ var __webpack_modules__ = {
    /***/ "./src/app.ts":
      /*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   App: () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services */ \"./src/services.ts\");\n/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models */ \"./src/models.ts\");\n/* harmony import */ var _validation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./validation */ \"./src/validation.ts\");\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./storage */ \"./src/storage.ts\");\n\n\n\n\nvar App = (function () {\n    function App() {\n        var storage = new _storage__WEBPACK_IMPORTED_MODULE_3__.LocalStorageStorage();\n        this.libraryService = new _services__WEBPACK_IMPORTED_MODULE_0__.LibraryService(storage);\n        this.validation = new _validation__WEBPACK_IMPORTED_MODULE_2__.Validation();\n        this.libraryService.loadBooks();\n        this.libraryService.loadUsers();\n        this.setupEventListeners();\n    }\n    App.prototype.setupEventListeners = function () {\n        var _this = this;\n        var _a;\n        (_a = document.getElementById('addBook')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () { return _this.addBook(); });\n    };\n    App.prototype.addBook = function () {\n        var title = this.getInputValue('bookTitle');\n        var author = this.getInputValue('bookAuthor');\n        var publicationYear = this.getInputValue('bookYear');\n        var isValid = this.validation.validateBook(title, author, publicationYear);\n        if (isValid) {\n            var book = new _models__WEBPACK_IMPORTED_MODULE_1__.Book(title, author, parseInt(publicationYear, 10));\n            this.libraryService.addBook(book);\n        }\n    };\n    App.prototype.getInputValue = function (inputId) {\n        var input = document.getElementById(inputId);\n        return input.value.trim();\n    };\n    return App;\n}());\n\ndocument.addEventListener('DOMContentLoaded', function () {\n    new App();\n});\n\n\n//# sourceURL=webpack://lab3/./src/app.ts?",
        );

        /***/
      },

    /***/ "./src/library.ts":
      /*!************************!*\
  !*** ./src/library.ts ***!
  \************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Library: () => (/* binding */ Library)\n/* harmony export */ });\nvar Library = (function () {\n    function Library() {\n        this._collection = [];\n    }\n    Object.defineProperty(Library.prototype, "collection", {\n        get: function () {\n            return this._collection;\n        },\n        set: function (collection) {\n            this._collection = collection;\n        },\n        enumerable: false,\n        configurable: true\n    });\n    Library.prototype.add = function (item) {\n        this._collection.push(item);\n    };\n    Library.prototype.remove = function (item) {\n        this._collection = this._collection.filter(function (i) { return i !== item; });\n    };\n    Library.prototype.find = function (predicate) {\n        return this._collection.find(predicate);\n    };\n    Library.prototype.getAll = function () {\n        return this._collection;\n    };\n    return Library;\n}());\n\n\n\n//# sourceURL=webpack://lab3/./src/library.ts?',
        );

        /***/
      },

    /***/ "./src/models.ts":
      /*!***********************!*\
  !*** ./src/models.ts ***!
  \***********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Book: () => (/* binding */ Book),\n/* harmony export */   User: () => (/* binding */ User)\n/* harmony export */ });\nvar Book = (function () {\n    function Book(title, author, publicationYear) {\n        this.title = title;\n        this.author = author;\n        this.publicationYear = publicationYear;\n        this.id = Book.getNextId();\n    }\n    Book.getNextId = function () {\n        return ++Book.idCounter;\n    };\n    Book.idCounter = 0;\n    return Book;\n}());\n\nvar User = (function () {\n    function User(id, name, email) {\n        this.id = id;\n        this.name = name;\n        this.email = email;\n        this.borrowedBooks = [];\n    }\n    User.prototype.borrowBook = function (book) {\n        if (this.borrowedBooks.length >= 3) {\n            throw new Error("Користувач може позичити не більше 3 книг.");\n        }\n        else {\n            this.borrowedBooks.push(book);\n        }\n    };\n    User.prototype.returnBook = function (book) {\n        this.borrowedBooks = this.borrowedBooks.filter(function (b) { return b.title !== book.title; });\n    };\n    return User;\n}());\n\n\n\n//# sourceURL=webpack://lab3/./src/models.ts?',
        );

        /***/
      },

    /***/ "./src/services.ts":
      /*!*************************!*\
  !*** ./src/services.ts ***!
  \*************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   LibraryService: () => (/* binding */ LibraryService)\n/* harmony export */ });\n/* harmony import */ var _library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./library */ "./src/library.ts");\n\nvar LibraryService = (function () {\n    function LibraryService(storage) {\n        this.bookLibrary = new _library__WEBPACK_IMPORTED_MODULE_0__.Library();\n        this.userLibrary = new _library__WEBPACK_IMPORTED_MODULE_0__.Library();\n        this.storage = storage;\n    }\n    LibraryService.prototype.addBook = function (book) {\n        this.bookLibrary.add(book);\n        this.saveBooks();\n    };\n    LibraryService.prototype.addUser = function (user) {\n        this.userLibrary.add(user);\n        this.saveUsers();\n    };\n    LibraryService.prototype.getAllBooks = function () {\n        return this.bookLibrary.getAll();\n    };\n    LibraryService.prototype.getAllUsers = function () {\n        return this.userLibrary.getAll();\n    };\n    LibraryService.prototype.saveBooks = function () {\n        var books = this.bookLibrary.getAll();\n        console.log("Saving books to localStorage:", books);\n        this.storage.save("books", books);\n    };\n    LibraryService.prototype.saveUsers = function () {\n        var users = this.userLibrary.getAll();\n        console.log("Saving users to localStorage:", users);\n        this.storage.save("users", users);\n    };\n    LibraryService.prototype.loadBooks = function () {\n        var books = this.storage.load("books");\n        console.log("Loaded books from localStorage:", books);\n        if (books) {\n            this.bookLibrary.collection = books;\n        }\n    };\n    LibraryService.prototype.loadUsers = function () {\n        var users = this.storage.load("users");\n        console.log("Loaded users from localStorage:", users);\n        if (users) {\n            this.userLibrary.collection = users;\n        }\n    };\n    return LibraryService;\n}());\n\n\n\n//# sourceURL=webpack://lab3/./src/services.ts?',
        );

        /***/
      },

    /***/ "./src/storage.ts":
      /*!************************!*\
  !*** ./src/storage.ts ***!
  \************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   LocalStorageStorage: () => (/* binding */ LocalStorageStorage)\n/* harmony export */ });\nvar LocalStorageStorage = (function () {\n    function LocalStorageStorage() {\n    }\n    LocalStorageStorage.prototype.save = function (key, data) {\n        console.log("Saving key: ".concat(key, ", data:"), data);\n        localStorage.setItem(key, JSON.stringify(data));\n    };\n    LocalStorageStorage.prototype.load = function (key) {\n        var data = localStorage.getItem(key);\n        console.log("Loading key: ".concat(key, ", data:"), data);\n        return data ? JSON.parse(data) : null;\n    };\n    LocalStorageStorage.prototype.remove = function (key) {\n        localStorage.removeItem(key);\n    };\n    LocalStorageStorage.prototype.clear = function () {\n        localStorage.clear();\n    };\n    LocalStorageStorage.prototype.exists = function (key) {\n        return localStorage.getItem(key) !== null;\n    };\n    return LocalStorageStorage;\n}());\n\n\n\n//# sourceURL=webpack://lab3/./src/storage.ts?',
        );

        /***/
      },

    /***/ "./src/validation.ts":
      /*!***************************!*\
  !*** ./src/validation.ts ***!
  \***************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Validation: () => (/* binding */ Validation)\n/* harmony export */ });\nvar Validation = (function () {\n    function Validation() {\n    }\n    Validation.prototype.validateBook = function (title, author, publicationYear) {\n        var isValid = true;\n        var divBookTitleFeedback = document.getElementById('bookTitleFeedback');\n        var divBookAuthorFeedback = document.getElementById('bookAuthorFeedback');\n        var divBookYearFeedback = document.getElementById('bookYearFeedback');\n        if (divBookAuthorFeedback) {\n            console.log(\"asdcmdfvmoainfv\" + divBookAuthorFeedback);\n        }\n        this.clearFeedback(divBookTitleFeedback);\n        this.clearFeedback(divBookAuthorFeedback);\n        this.clearFeedback(divBookYearFeedback);\n        if (!title || title.trim() === '') {\n            this.addErrorMessage(divBookTitleFeedback, 'Назва книги є обов’язковою!');\n            console.log(\"name\");\n            isValid = false;\n        }\n        if (!author || author.trim() === '') {\n            this.addErrorMessage(divBookAuthorFeedback, 'Автор книги є обов’язковим!');\n            isValid = false;\n            console.log(\"author\");\n        }\n        var year = parseInt(publicationYear, 10);\n        var currentYear = new Date().getFullYear();\n        if (!publicationYear || publicationYear.trim() === '') {\n            this.addErrorMessage(divBookYearFeedback, 'Рік публікації є обов’язковим!');\n            isValid = false;\n            console.log(\"year\");\n        }\n        else if (isNaN(year)) {\n            this.addErrorMessage(divBookYearFeedback, 'Поле має містити числовий формат!');\n            isValid = false;\n        }\n        else if (year < 1000) {\n            this.addErrorMessage(divBookYearFeedback, 'Рік має бути чотиризначним числом!');\n            isValid = false;\n        }\n        else if (year > currentYear) {\n            this.addErrorMessage(divBookYearFeedback, 'Рік має бути дійсним!');\n            isValid = false;\n        }\n        return isValid;\n    };\n    Validation.prototype.addErrorMessage = function (div, message) {\n        console.log(\"error\");\n        var errorMessage = document.createElement('p');\n        errorMessage.textContent = message;\n        div.appendChild(errorMessage);\n        div.classList.add('invalid-input');\n    };\n    Validation.prototype.clearFeedback = function (div) {\n        div.classList.remove('invalid-input');\n        while (div.firstChild) {\n            div.removeChild(div.firstChild);\n        }\n    };\n    return Validation;\n}());\n\n\n\n//# sourceURL=webpack://lab3/./src/validation.ts?",
        );

        /***/
      },

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId];
    /******/ if (cachedModule !== undefined) {
      /******/ return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ // no module.id needed
      /******/ // no module.loaded needed
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ __webpack_modules__[moduleId](
      module,
      module.exports,
      __webpack_require__,
    );
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/define property getters */
  /******/ (() => {
    /******/ // define getter functions for harmony exports
    /******/ __webpack_require__.d = (exports, definition) => {
      /******/ for (var key in definition) {
        /******/ if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          /******/ Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/ (() => {
    /******/ __webpack_require__.o = (obj, prop) =>
      Object.prototype.hasOwnProperty.call(obj, prop);
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/make namespace object */
  /******/ (() => {
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = (exports) => {
      /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {
          value: "Module",
        });
        /******/
      }
      /******/ Object.defineProperty(exports, "__esModule", { value: true });
      /******/
    };
    /******/
  })();
  /******/
  /************************************************************************/
  /******/
  /******/ // startup
  /******/ // Load entry module and return exports
  /******/ // This entry module can't be inlined because the eval devtool is used.
  /******/ var __webpack_exports__ = __webpack_require__("./src/app.ts");
  /******/
  /******/
})();
