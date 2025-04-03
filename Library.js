// Book Class
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.isAvailable = true; // Default status: available
    }

    borrowBook() {
        if (this.isAvailable) {
            this.isAvailable = false;
            console.log(`${this.title} has been borrowed.`);
        } else {
            console.log(`${this.title} is already borrowed.`);
        }
    }

    returnBook() {
        this.isAvailable = true;
        console.log(`${this.title} has been returned.`);
    }
}

// User Class
class User {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.borrowedBooks = [];
    }

    borrow(book) {
        if (book.isAvailable) {
            book.borrowBook();
            this.borrowedBooks.push(book);
            console.log(`${this.name} borrowed "${book.title}".`);
        } else {
            console.log(`Sorry, "${book.title}" is currently not available.`);
        }
    }

    return(book) {
        let index = this.borrowedBooks.indexOf(book);
        if (index !== -1) {
            book.returnBook();
            this.borrowedBooks.splice(index, 1);
            console.log(`${this.name} returned "${book.title}".`);
        } else {
            console.log(`${this.name} does not have "${book.title}" to return.`);
        }
    }
}

// Create book instances
const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", "123456");
const book2 = new Book("1984", "George Orwell", "789101");

// Create user instances
const user1 = new User("Alice", 101);
const user2 = new User("Bob", 102);

// Borrow and return books
user1.borrow(book1);
user1.borrow(book2);
user2.borrow(book1);
user1.return(book1);
user2.borrow(book1);
user1.return(book2);
