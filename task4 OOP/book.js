// 2. Система управления библиотекой
// Создайте класс Book с следующими свойствами:
// ● Название
// ● Автор
// ● ISBN
// ● Статус (взята или доступна)
// Далее создайте класс Library, который:
// ● Позволяет добавлять новые книги.
// ● Позволяет брать книгу по её ISBN.
// ● Позволяет возвращать взятую книгу по её ISBN.
// ● Показывает список доступных книг.
// Реализуйте методы для управления книгами и их статусами.
class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.status = "available";
  }
}

class Library {
  constructor() {
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
  }

  borrowBook(isbn) {
    const book = this.books.find((b) => b.isbn === isbn);
    if (!book) return `Книга с ISBN ${isbn} не найдена.`;

    if (book.status === "available") {
      book.status = "taken";
      return `Книга "${book.title}" успешно взята.`;
    } else {
      return `Книгу "${book.title}" уже взяли.`;
    }
  }

  returnBook(isbn) {
    const book = this.books.find((b) => b.isbn === isbn);
    if (!book) return `Книга с ISBN ${isbn} не найдена.`;

    if (book.status === "taken") {
      book.status = "available";
      return `Книга "${book.title}" успешно возвращена.`;
    }
    return `Книга "${book.title}" уже доступна.`;
  }

  listAvailableBooks() {
    const availableBooks = this.books.filter((b) => b.status === "available");
    if (availableBooks.length <= 0) {
      console.log("Нет доступных книг.");
      return;
    }

    console.log("Доступные книги:");
    availableBooks.forEach((book) =>
      console.log(`- "${book.title}" от ${book.author} (ISBN: ${book.isbn})`)
    );
  }
}

const library = new Library();
const book1 = new Book("Гордость и предубеждение", "Джейн Остин", "1234567890");
const book2 = new Book("1984", "Джордж Оруэлл", "0987654321");

library.addBook(book1);
library.addBook(book2);

console.log(library.borrowBook("1234567890")); // Книга "Гордость и предубеждение" успешно взята.
console.log(library.borrowBook("1234567890")); // Книгу "Гордость и предубеждение" уже взяли.
console.log(library.returnBook("1234567890")); // Книга "Гордость и предубеждение" успешно возвращена.
console.log(library.returnBook("1234567890")); // Книга "Гордость и предубеждение" уже доступна.

/* Доступные книги:
book.js:63 - "Гордость и предубеждение" от Джейн Остин (ISBN: 1234567890)
book.js:63 - "1984" от Джордж Оруэлл (ISBN: 0987654321)
 */
library.listAvailableBooks();
