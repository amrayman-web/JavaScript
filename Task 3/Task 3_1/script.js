// 1 .Inventory Stock Checker : 

let inventory = {
    apple: 6,
    tomato: 10,
    orange: 1,
    watermelon: 12,
    strawberry: 0
};

for (let fruit in inventory) {
    if (inventory[fruit] > 1) {
        console.log(fruit + ": In stock");
    } else if (inventory[fruit] == 1) {
        console.log(fruit + ": Only 1 Left");
    } else {
        console.log(fruit + ": Out of stock");
    }
}

// 2 .Student Grades Evaluator: 

let students = [
    {
        name: "Amr Ayman",
        grade: 92
    },
    {
        name: "Baher Adel",
        grade: 70
    },
    {
        name: "Tony Ashraf",
        grade: 59
    }
];

for (let grades of students) {
    if (grades.grade >= 90) {
        console.log(`${grades.name} : EXCELLENT`)
    } else if (grades.grade >= 60) {
        console.log(`${grades.name} : PASS`)
    } else {
        console.log(`${grades.name} : FAIL`)
    }
}

// 3 .Cart Total Calculator : 

let cart = [
    { name: "TV", price: 4000, quantity: 1 },
    { name: "smart watch", price: 1000, quantity: 2 },
    { name: "iphone 15", price: 2500, quantity: 3 }
];

let totalPrice = 0;
let discount = 10;
let mostExpensive = cart[0];

for (let product of cart) {

    totalPrice += product.price * product.quantity

    if (product.price > mostExpensive.price) {
        mostExpensive = product;
    }
}

console.log("Total price :" + totalPrice);

if (totalPrice >= 3000) {
    totalPrice = totalPrice - (totalPrice * discount) / 100
    console.log("Price After Discount :" + totalPrice);
}

console.log("Most Expensive Product: " + mostExpensive.name);
console.log("Price: " + mostExpensive.price);

// 5 .ATM Withdrawal Simulation : 

let balance = 71984;
let pin = 1234;
let correct = false;
let cancel = false;

for (let i = 1; i <= 3; i++) {

    let enterPin = +prompt("Enter your PIN:");

    if (enterPin === 0) {
        cancel = true;
        break;
    }
    if (enterPin === pin) {
        correct = true;
        break;
    } else {
        alert(`Wrong PIN , please try again you have ${3 - i} chances left`);
    }
}

if (cancel) {
    alert("Thanks for choosing HSBC Bank");
} else if (correct) {

    while (true) {

        let withdrawal = +prompt("Enter withdrawal amount:");

        if (withdrawal > balance) {
            alert("Insufficient funds");
        } else if (withdrawal > 12000) {
            alert("Withdrawal exceeded attempt limit");
        }
        else {
            balance -= withdrawal;
            alert("Withdrawal successful. New balance: " + balance);
        }

        let continueLoop = true;

        while (true) {
            let attempts = prompt("Would you like to withdraw again? (Y/N)")

            if (attempts == "N" || attempts == "n") {
                alert("Thanks for using HSBC Bank");
                continueLoop = false;
                break;
            } else if (attempts == "Y" || attempts == "y") {
                break;
            } else {
                alert("Please enter a Valid answer. (Y/N)")
            }
        }

        if (!continueLoop) {
            break;
        }
    }

} else {
    alert("Too many incorrect attempts. Account blocked.");
}


// 1. Function with Parameters

function calculateSum(num1, num2) {
    return num1 + num2;
}

let sum1 = calculateSum(54, 30)
let sum2 = calculateSum(266, 33)
let sum3 = calculateSum(200, 23)

console.log(sum1);
console.log(sum2);
console.log(sum3);


// 2. Function with Conditional Logic

function checkTemperature(temperature) {
    if (temperature > 30) {
        return "Hot";
    } else if (temperature >= 20 && temperature <= 30) {
        return "Warm";
    } else {
        return "Cold";
    }
}

let temperature1 = checkTemperature(35)
let temperature2 = checkTemperature(25)
let temperature3 = checkTemperature(15)

console.log(temperature1);
console.log(temperature2);
console.log(temperature3);


// 1. Creating and Accessing Properties

let car = {
    brand: "BMW",
    model: "340i",
    year: 2018
};

console.log(car.brand)

let carModel = "model";

console.log("Car Model : " + car[carModel]);

// 2. Adding Methods

car.getDetails = function () {
    return `This is a ${this.brand} ${this.model} from ${this.year}.`;
};
console.log(car.getDetails());

// 1. Basic Class 

class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    getSummary() {
        return `${this.title} by ${this.author}, published in ${this.year}`;
    }
}

let book1 = new Book("Harry Potter", "J.K. Rowling", 1997);
let book2 = new Book("The Alchemist", "Paulo Coelho", 1988);

console.log(book1.getSummary());
console.log(book2.getSummary());





