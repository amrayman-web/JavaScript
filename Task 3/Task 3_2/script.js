
// Task 1: Basic Array Operations 

let fruits = ["Apple", "Banana", "Mango", "Orange", "Pineapple"];

console.log(fruits[0]);
console.log(fruits[fruits.length - 1]);

fruits.push("Grapes");

fruits.splice(1, 1);

console.log(fruits);

// Task 2: Array of Numbers

let randomNumbers = [];

for (let i = 1; i <= 10; i++) {
    randomNumbers.push(Math.floor(Math.random() * 100));
}

console.log(randomNumbers)

let evenNumbers = randomNumbers.filter((number) => number % 2 == 0)

console.log(evenNumbers);

let sum = 0;

for (let numbers of randomNumbers) {
    sum += numbers
}
console.log("Total Sum :" + sum);

let maxNumber = randomNumbers[0];
let minNumber = randomNumbers[0];

for (let x = 0; x < randomNumbers.length; x++) {
    if (randomNumbers[x] > maxNumber) {
        maxNumber = randomNumbers[x]
    }

    if (randomNumbers[x] < minNumber) {
        minNumber = randomNumbers[x];
    }
}

console.log(maxNumber);
console.log(minNumber);

// Task 3: Student Object 

let student = {
    name: "amr ayman",
    age: 27,
    grade: 90,
    subjects: ["HTML", "CSS", "JavaScript"],

    displayInfo: function () {
        console.log("Name:", this.name);
        console.log("Age:", this.age);
        console.log("Grade:", this.grade);
        console.log("Subjects:", this.subjects);
    }
};

student.displayInfo();

// Task 4: Array of Objects 

let books = [
    {
        title: "Harry Potter",
        author: "J.K. Rowling",
        year: 1997
    },
    {
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        year: 1937
    },
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        year: 1925
    }
];

books.forEach((book) => console.log(book.title)
);

let oldestBook = books[0];

books.forEach((book) => {
    if (book.year < oldestBook.year) {
        oldestBook = book
    }
}
)

console.log("Oldest book:" + oldestBook.title);

// Task 5: Create a Class 

class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    displayDetails() {
        console.log("Brand:", this.brand);
        console.log("Model:", this.model);
        console.log("Year:", this.year);
    }
}

let car1 = new Car("BMW", "340i", "2018");
let car2 = new Car("Toyota", "supra", "2010");

car1.displayDetails()
car2.displayDetails()

// Task 6: Class with Methods //


class BankAccount {
    constructor(ownerName, balance) {
        this.ownerName = ownerName;
        this.balance = balance;
    }

    deposit(amount) {
        return this.balance += amount;
    }

    withdraw(amount) {
        if (amount <= this.balance) {
            return this.balance -= amount
        } else {
            console.log(`insufficient amount, the available balance is : ${this.balance} `)
        }
    }
    checkBalance() {
        console.log("Current Balance :", this.balance)
    }
}

let account = new BankAccount("Amr Ayman", 51000)

account.deposit(12000);
account.checkBalance();

account.withdraw(10000);
account.checkBalance();

account.withdraw(100000);

// Bonus Challenge

class Library {

    constructor() {
        this.books = [];
    }

    addBook(title, author) {
        this.books.push({
            title: title,
            author: author
        });
    }

    removeBook(title) {
        let index = this.books.findIndex((book) => {
            return book.title === title;
        });

        if (index !== -1) {
            this.books.splice(index, 1);
        }
    }

    listBooks() {
        console.log("All books:");
        this.books.forEach((book) => {
            console.log("BOOK:", book);

        });
    }
}

let library = new Library();

library.addBook("Harry Potter", "J.K. Rowling");
library.addBook("The Hobbit", "J.R.R. Tolkien");
library.addBook("The Great Gatsby", "F. Scott Fitzgerald");
library.listBooks();
library.removeBook("The Hobbit");
library.listBooks();