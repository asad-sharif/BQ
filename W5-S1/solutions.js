// 1. Check Even or Odd
// Create a variable that stores a number.
// Use if/else to check whether the number is even or odd.
// Hint: use % 2 to check remainder.

let num = 7;

if (num % 2 === 0) {
    console.log("Even");
} else {
    console.log("Odd");
}


// 2. Add Two Numbers Using a Function
// Create a function that takes two numbers as parameters.
// Return the sum of those numbers and print the result.

function add(a, b) {
    return a + b; // return sum
}

console.log(add(5, 3));


// 3. Find the Biggest Number in Array
// Given an array of numbers.
// Use a loop to find and print the largest number.
// Hint: keep a variable to store the biggest value.

let numbers = [5, 12, 7, 20, 3];
let biggest = numbers[0];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > biggest) {
        biggest = numbers[i];
    }
}

console.log("Biggest:", biggest);


// 4. Count Passing Students
// Given an array of student marks.
// Count how many students passed (marks >= 50).

let marks = [45, 60, 72, 30, 90];
let passCount = 0;

for (let i = 0; i < marks.length; i++) {
    if (marks[i] >= 50) {
        passCount++;
    }
}

console.log("Passed Students:", passCount);


// 5. Print Numbers from 1 to N
// Store a number n.
// Use a for loop to print numbers from 1 up to n.

let n = 5;

for (let i = 1; i <= n; i++) {
    console.log(i);
}


// 6. Sum of All Numbers in Array
// Given an array of numbers.
// Calculate and print the total sum using a loop.
// Hint: start sum from 0.

let arr = [10, 20, 30, 40];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}

console.log("Sum:", sum);


// 7. Check Positive, Negative or Zero
// Store a number in a variable.
// Use if / else if / else to check whether it is:
// Positive, Negative, or Zero.

let number = -3;

if (number > 0) {
    console.log("Positive");
} else if (number < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
}


// 8. Print Only Even Numbers
// Given an array of numbers.
// Use a loop and condition to print only even numbers.

let nums = [1, 2, 3, 4, 5, 6, 7, 8];

for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
        console.log(nums[i]);
    }
}


// 9. Simple Greeting Function
// Create a function that takes a name as input.
// Print: "Welcome, <name>!"

function greet(name) {
    console.log("Welcome, " + name + "!");
}

greet("Asad");


// 10. Login Check System
// Store a username and password.
// If both match the correct values, print "Login Successful".
// Otherwise print "Invalid Credentials".
// Hint: use logical AND (&&).

let username = "admin";
let password = "1234";

if (username === "admin" && password === "1234") {
    console.log("Login Successful");
} else {
    console.log("Invalid Credentials");
}