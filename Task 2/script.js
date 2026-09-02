// Task 1: Print Numbers

for (let i = 1; i <= 20; i++) {
    console.log(i);
}

// Task 2: Sum of Even Numbers 

let x = 1;
let evenSum = 0;

while (x <= 50) {
    if (x % 2 == 0) {
        evenSum += x;
    }
    x++;
}

console.log(evenSum);

// Task 3: Multiplication Table 

let y = 1;
let mult;

do {
    mult = 5 * y;
    console.log(`5 * ${y} = ${mult}`);
    y++;
} while (y <= 12);

// Task 4: Simple Calculator 

alert("Welcome Back to our Calculator!")
let result;
let repeat;

do {
    let a = +prompt("Enter First Number :");
    let b = +prompt("Enter Second Number :");
    let action = prompt("what do you want to do ? (add | sub | mult | div)")

    switch (action) {
        case "add":
            result = a + b;
            break;

        case "sub":
            result = a - b;
            break;

        case "mult":
            result = a * b;
            break;

        case "div":
            result = a / b;
            break;


        default:
            result = "invalid choice";
    }

    alert(`The Result Is = ${result}`);

    repeat = prompt("would you like to repeat another operation ? (Y/N)");

} while (repeat == "Y");

alert("Thanks for using our Calculator!");

// Task 5: Greeting Function 

function greet(name) {
    return `Welcome Back, ${name}`;
}

let userName;
userName = prompt("Please enter Username");
alert(greet(userName));

// Task 6: Find Maximum 

let max;

function findMax(n1, n2, n3) {
    max = n1;

    if (n2 > max) {
        max = n2
    }

    if (n3 > max) {
        max = n3
    }
    return max;
}

let num1 = +prompt("Please Enter The First Number :")
let num2 = +prompt("Please Enter The Second Number :")
let num3 = +prompt("Please Enter The Third Number :")

alert(`the maximum number is ${findMax(num1, num2, num3)}`)

// Task 7: Factorial Function 

function factorial(num) {
    let F = 1;

    for (let z = 1; z <= num; z++) {
        F *= z;
    }

    return F;
}

let factorialNum = prompt("Enter A Given Number To Calculate Its Factorial");
alert(`The result is ${factorial(factorialNum)}`)
