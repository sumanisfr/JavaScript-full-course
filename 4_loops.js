//* ===============================
//* Conditional statement Section
//* ===============================

//* ===============================
//* If Statement
//* ===============================

//? If Else:  The if...else statement executes a statement if a specified condition is truthy. If the condition is falsy, another statement in the optional else clause will be executed.

// //? Syntax
// if (condition) {
//   Code to be executed if the condition is true
// } else {
//   Code to be executed if the condition is false
// }


// var temperature = 25;
// if (temperature > 30) {
//     console.log( " lets go to beach")
//   }  else {
//         console.log("tv dekhte hai yr")
//     }
                                                                            

//? We can also use an else if clause to check additional conditions:

var temperature = 15;
if (temperature > 30) {
    console.log( " lets go to beach")
  }  else if (temperature >=20 && temperature > 10) {
        console.log("tv dekhte hai yr")
    } else {
        console.log("kambal oodo so jawo")
           }

//* ===============================
//* Interview Question
//* ===============================

//! Requirements:
// ?If the person is 18 years or older, a citizen, and registered to vote, display a message saying they are eligible to vote.
// ?If the person is younger than 18, not a citizen, or not registered to vote, display a message saying they are not eligible to vote.
// ?If the person is 18 or older but not a citizen, display a message saying they are not eligible due to citizenship status.
// ?If the person is 18 or older, a citizen, but not registered to vote, display a message saying they are not eligible due to registration status.
// ?Extended voting eligibility checker with additional conditions
// ?Assume the user's age, citizenship status, and registration status as inputs
let userAge = 22;
let isCitizen = true; // Assume true for citizen, false for non-citizen
let isRegistered = false; // Assume false for not registered, true for registered
//! Check eligibility using if...else statements with multiple conditions

if(userAge >= 18)
    if (isCitizen)
        if (isRegistered){
        console.log("you are eligible to vote")
        }
        else(
            console.log("you are not eligible due to registration status")
        )
     else{
         console.log(" you are not eligible due to citizenship status");
    }
      else {
        console.log(" you are not eligible to vot (younger)")
      }
    
//* ===============================
//* Interview Questions
//* ===============================
//! 1: Write a program to check if a number is even or odd.

// var num = "7";
// if (num %2 == 0){
//     console.log("even")
// } else{
//     console.log("odd")
// }

//! 2: Write a program to check if a number is prime.

var num = 12;
var isPrime = true;

for(var i = 2; i,num; i++ ){
    if(num % i === 0){
        isPrime = false;
        break;
    }
}

 if (isPrime){
    console.log("Num is prime");
 }else{
    console.log("Num is not prime");
 }


//todo Prime numbers are numbers that have only 2 factors: 1 and themselves.
//? All prime numbers greater than 2 are odd.
//? However, not all odd numbers are prime.

//! 3: Write a program to check if a number is positive, negative, or zero.

// var num = 12;
// if (num == 0){
//     console.log("num is zero");
// }else if (num > 0) {
//     console.log ("num is positive");
// } else {
//     console.log("num is negative");
// }

//* ===============================
//* Switch Statement
//* ===============================

//? Switch Statement: The switch statement is used to perform different actions based on different conditions.
//? Syntax:
// switch (expression) {
//   case value1:
//       Code to be executed if expression === value1
//     break;

//   case value2:
//       Code to be executed if expression === value2
//     break;

//    More cases can be added as needed

//   default:
//    Code to be executed if none of the cases match
// }



//todo let's see the example
//! Explain how the switch statement works and what will be the output when the variable day is set to different values.

// var day = "monday";
// switch(day){
//     case"monday":
//     console.log("today is monday");
//     break;

//     case"friday":
//     console.log("party today ");
//     break;

//     case"sunday":
//     console.log("watch movie");
//     break;

//     default:
//     console.log("no condition match");
// }

//?=========================
// ? Challenge time
//? ==========================

//! Write a JavaScript switch statement that takes a variable areaOfShapes representing different shapes, and based on its value, calculates and logs the area of the corresponding shape. Consider three shapes: 'Rectangle,' 'Circle,' and 'Square.' For 'Rectangle,' use variables a and b as the sides; for 'Circle,' use a variable r as the radius; and for 'Square,' use variable a as the side length. If the provided shape is not recognized, log a message saying, 'Sorry the shape is not available.' Test your switch statement with areaOfShapes set to 'Square' and sides a and b set to 5 and 10, respectively. Ensure that the correct area (25 in this case) is logged to the console.

// var areaOfShapes = "square";
// var a = 5;
// var b = 10;
// var result;
// switch (areaOfShapes){
//     case"square": result = a*a;
//     console.log(result);
//     break;

//     case"rectangle":
//     result = a*b;
//     console.log(result);
//     break;

//     case"circle":
//     var r =2;
//     result= 3.14*(r*r);
//     console.log(result);
//     break;

//     default:
//     console.log("no shape matches");
    
// }

//* ===============================
//* While Loop
//* ===============================

// ? While Loop: A while loop in JavaScript is a control structure that repeatedly executes a block of code as long as a specified condition remains true. The loop continues iterating while the condition is true, and it terminates when the condition becomes false.

// while (condition) {
//   // Code to be executed as long as the condition is true
// }

//* Simple while loop to count from 1 to 10 🧑‍💻

//  var num = 1;
//  while (num <= 10){
//     console.log(num);
//     num++;
//  }

//! practice 🧑‍💻
//? let's create a table of 5
var num = 1;
while(num <= 10){
    console.log("5 *" + num + " = " + 5 * num);
    // console.log('5 * ${num} = ${5 * num}');
        num++;
}


//* ===============================
//* Do-While Loop
//* ===============================

//? Do...While Loop: A do...while loop in JavaScript is similar to a while loop, but it guarantees that the loop body will be executed at least once before checking the loop condition. The loop continues to execute while the specified condition is true, and it terminates when the condition becomes false.

// Syntax: do {
//   // Code to be executed at least once
// } while (condition);

//* Simple do...while loop to count from 1 to 10 🧑‍💻

// var num = 1;
// while (num <= 10){
//    console.log(num);
//    num++;
// }


var num = 1;
do{
    console.log(num);
    num++;
 }while (num <= 10)


//? Common Use Cases:
// When you want to guarantee the execution of the loop body at least once.
// When the number of iterations is not known beforehand, and you want to validate the condition after the first iteration.

//? Example: Validating User Input with a Do...While Loop(user need to write a valid number) 🧑‍💻

// let UserInput;
// let positivenumber;
// do {
//     UserInput = prompt("enter any positive number");
//     positivenumber = parseFloat(UserInput);

// } while (isNaN(positivenumber) || positivenumber < 0);
// console.log("you entered a valid positive number:" , positivenumber)

//* ===============================
//* For Loop
//* ===============================

//? For Loop: A for loop in JavaScript is a control flow statement that allows you to repeatedly execute a block of code a specified number of times. It's particularly useful when you know the exact number of iterations needed.

// example: for (initialization; condition; iteration) {
//   // Code to be executed in each iteration
// }
// Initialization: Executed before the loop starts. Often used to initialize a counter variable.
// Condition: Evaluated before each iteration. If false, the loop terminates.
// Iteration: Executed after each iteration. Typically used to update the loop control variable.

//* Simple for loop to count from 1 to 10

// var num = 1;`
// while (num <= 10){
//    console.log(num);
//    num++;
// }`

// for (var num = 1; num<=10; num++){
//     console.log(num);
// }

//? Key Point:
// The initialization, condition, and iteration expressions are optional. You can omit any or all of them, but you must include the semicolons.
//* The code for (;;) {} represents an infinite loop in JavaScript. This construct is commonly used when you want a loop to run indefinitely or until a break statement is encountered within the loop. It's equivalent to while (true) {}.

//* use case: Game Development:
//? In game development, an infinite loop can be used to continuously update and render game frames until a specific condition (e.g., game over) is met.

// for (;;) {
//   // Update game logic and render frames
// }

//? Common Use Cases:
// When you know the exact number of iterations needed.
// Iterating over elements in an array.
// Performing a task a specific number of times.

//! practice :
//! Calculate the sum of numbers from 1 to 10 using a for loop 🧑‍💻

var sum = 0;
debugger;
for(var num=1; num <= 10; num++){
    var sum = sum + sum;
}
    console.log(sum);


//! Generating a Times Table:🧑‍💻
//! Example 3: Generating a times table of 5 with a for loop.


//! Homework ➡️ JavaScript program to print table for given number (8,9,12,15) using for Loop?

//? More Practice
//1: program To check if a year is a leap year🧑‍💻

var year = 2020;
if((year % 4 == 0 && year % 100 != 0) || year % 400 == 0){
    console.log("leap year");
} else {
    console.log("not a leap year");
}           

// ! 2: Draw a pattern with Asterisks🧑‍💻

// *      i/j   1   2   3   4   5
// *      1     *   -   -   -   -
// *      2     *   *   -   -   -
// *      3     *   *   *   -   -
// *      4     *   *   *   *   -
// *      5     *   *   *   *   *

for (var i = 1; i <= 5; i++){
     var pattern = "";
    for (var j = 1; j <= i ; j++){
        {
    pattern = pattern + " * "       } 
    }
    console.log(pattern);
}


//! 2: program To check if a number is a palindrome🧑‍💻

var num = 121; 
var originalNum = num;
var reverseNum = 0;
while(num > 0){
    var remainder = num % 10;
    reverseNum = reverseNum * 10 + remainder;
    num = parseInt(num / 10);
}
if(originalNum == reverseNum){
    console.log("palindrome");
}
else{
    console.log("not a palindrome");
}
