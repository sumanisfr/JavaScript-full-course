//* ===============================
//* Function in JavaScript
//* ==============================
//? In JavaScript, a function is a block of reusable code that performs a specific task or set of tasks. Functions are used to organize code into modular and manageable pieces, promote code reuse, and make programs more readable.

//  3 students at a time wants to find the sum of two numbers

// 1st student
// var a = 5;
//   b = 10;

// let sum = a + b;    
// console.log(sum);

// // 2nd student
// var c = 15;
//     d = 20;
// let sum1 = c + d;
// console.log(sum1);

// // 3rd student
// var e = 25;
//     f = 30;
// let sum2 = e + f;
// console.log(sum2);

// // 4th student
// var g = 35;
// var h = 40;
// let sum3 = g + h;   
// console.log(sum3);

// // lets make a reusable code for all students
// function sum(a, b) {
//   return a + b;
// }

// console.log(sum(5, 10));
// console.log(sum(15, 20));
// console.log(sum(25, 30));
// console.log(sum(35, 40));

//* ===============================
//* Function Declaration:
//* ==============================

//? Declare a function using the function keyword, followed by the function name, parameters (if any), and the function body.
//? This step defines the function and specifies what code should be executed when the function is called.

// function greet() {
//   console.log("Hello Guys, Welcome to Thapa Technical JS Course ");
// }

//* =================================================
//* Function Invocation (Calling a Function):
//* =================================================

//?After declaring a function, you can invoke or call it by using its name followed by parentheses.
//? If the function has parameters, provide values (arguments) for those parameters inside the parentheses.

//? How to call a function
// greet();

//! Practice Time
//! 1. Write a function to find the sum of two numbers.

//todo Tips "1st declare the function & then call it" In JavaScript, it's a good practice to declare (define) your functions before you call them. This ensures that the function is available for use when you try to call it.

// Function definition

// function sum(a, b) {
//     var a = 5;  
//     var b = 10;
//     console.log(a + b);
// }


// // Calling the function
// sum();

//* ==============================
//* Function Parameter:
//* ==============================

//? A function parameter is a variable that is listed as a part of a function declaration. It acts as a placeholder for a value that will be provided when the function is called. Parameters allow you to pass information into a function, making it more versatile and reusable.

// Syntax: function functionName(parameter1, parameter2, ...params) {
//   // Function body
//   // Code to be executed when the function is called
// }

//* ==============================
//* Function Argument:
//* ==============================

//? A function argument is a value that you provide when you call a function. Arguments are passed into a function to fill the parameters defined in the function declaration.

//? syntax:
//? functionName(argument1, argument2, ...);

//! Practice Time
//? Let's say we want to greet students with one same line
//! Write a JavaScript program that defines a function called greet to welcome individuals to the Thapa Technical JS Course. The function should take a name parameter and output the message "Hello [name], Welcome to Thapa Technical JS Course". Call the function twice, once with the argument "vinod" and once with the argument "ram".

// function greet(name) {
//     console.log("Hello " + name + ", Welcome to Thapa Technical JS Course");
// }
// greet("ram");
// greet("vinod"); 

//! 1. Write a function to find the sum of two numbers with parameters.

// function sum(a, b) {
//     console.log(a + b);
// }
// sum(5, 10);
// sum(15, 20);

//* ==============================
//* Function expressions
//* ==============================
//? A function expression is a way to define a function as part of an expression. It can be either named or anonymous. If it's named, it becomes a named function expression.

// var result = function sum(a, b) {
//     console.log(a + b);
// }
// result(5, 10);

//* ==============================
//*  Anonymous Function
//* =============================
//? An anonymous function is a function without a name. It can be created using either a function expression or a function declaration without a specified name.

//* ==============================
//*  Return Keyword
//* =============================
//? Return Keyword: In JavaScript, the return statement is used within a function to specify the value that the function should produce or provide back to the code that called it. The return statement stops the execution of a function and sends a value back to the caller

//? Syntax
// return expression;

//! Example 1: Returning a Sum of two number
// function sum(a, b) {
//     return a + b;
// }

// console.log(sum(5, 10));
// console.log(sum(15, 20));
// console.log(sum(25, 30));

//* ==============================
//* IIFE - immediately invoked function expression
//* =============================
//? An IIFE, or Immediately Invoked Function Expression, is a JavaScript function that is defined and executed immediately after its creation. It is a way to create a self-contained block of code that doesn't interfere with the surrounding code and executes immediately

// Syntax
// (function () {
//   // code to be executed
// })();



// !Practice Time ( IIFE with Parameters)

//? Interview Questions

//! Question 1: Calculator Function
//! Write a JavaScript function calculator that takes two numbers and an operator as parameters and returns the result of the operation. The function should support addition, subtraction, multiplication, and division.

// console.log(calculator(5, 10, "+")); // 15
// console.log(calculator(5, 10, "-")); // -5
// console.log(calculator(5, 10, "*")); // 50
// console.log(calculator(5, 10, "/")); // 0.5

// function calculator(a, b, operator) {
//     switch (operator) {
//         case "+":
//             return a + b;
//         case "-":
//             return a - b;
//         case "*":
//             return a * b;
//         case "/":
//             return a / b;
//         default:
//             return "Invalid operator";
//     }
// }

// function calculator(num1, num2, operator) {
//     switch (operator) {
//         case "+":
//             return num1 + num2;
//         case "-":
//             return num1 - num2;
//         case "*":
//             return num1 * num2;
//         case "/":
//             return num1 / num2;
//         default:
//             return "Invalid operator";
//     }
// }

// console.log(calculator(5, 10, "+")); // 15
// console.log(calculator(5, 10, "-")); // -5
// console.log(calculator(5, 10, "*")); // 50
// console.log(calculator(5, 10, "/")); // 0.5

//! Reverse a String:
//! Write a function to reverse a given string without using built-in reverse methods.

// const isReverse = (str) => {
//     let reverseStr = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//         reverseStr += str[i];
//     }
//     return reverseStr;
// }
// console.log(isReverse("Hello")); // olleH

//! Palindrome Check:
//! Create a function to determine if a given string is a palindrome (reads the same backward as forward).

// const isPalindrome = (str) => {
//     let reverseStr = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//         reverseStr += str[i];
//     }
//     if (str === reverseStr) {
//         return true;
//     }
//     return false;
   
// }
// console.log(isPalindrome("madam")); // true