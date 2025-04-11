//* ======================================
//* ARRAYS IN JAVASCRIPT
//* =====================================

//! Iterable - object where you can use the for-of loop
//! Array-like object - Any object with length property and use indexes to access items
//! Arrays as Objects:  Arrays in JavaScript are a specific type of object that has numeric keys (indices) and a length property. The indices are automatically maintained, and the length property is automatically updated when you add or remove elements from the array.
//! typeof Operator: The typeof operator in JavaScript returns "object" for both arrays and regular objects.

//* JavaScript Array is a data structure that allows you to store and organize multiple values within a single variable. It is a versatile and dynamic object. It can hold various data types, including numbers, strings, objects, and even other arrays. Arrays in JavaScript are zero-indexed i.e. the first element is accessed with an index 0, the second element with an index of 1, and so forth.

//* ======================================
//*  Creating Arrays:
//* =====================================

//? Arrays in JavaScript can be created using the Array constructor or with array literals (square brackets []).

//? Using Array constructor

//? Using array literal

//? we can also create an empty array

// let arr = {};
// console.log(typeof arr); // object



// let fruits = ["Apple", "Banana", "Mango", "Orange"];
// console.log(fruits);

// let numbers = [1, 2, 3, 4, 5];  
// console.log(numbers);

// let random = [1, "Apple", true, 3.14];
// console.log(random);

//* ======================================
//*  Accessing Elements:
//* =====================================
//?👉 Accessing Elements:  Array elements are accessed using zero-based indices.

// let fruits = ["Apple", "Banana", "Orange"];
// console.log(fruits[0]); // Apple

//* ======================================
//*  Modifying Elements:
//* =====================================
//?👉  Modifying Elements: You can modify array elements by assigning new values to specific indices.

// let fruits = ["Apple", "Banana", "Orange"];
// fruits[1] = "Mango";
// console.log(fruits); // ["Apple", "Mango", "Orange"]


//* =============================================
//*  Array Traversal / Iterating Over Arrays
//* ============================================
//?👉 Array Traversal / Iterating Over Arrays

// let fruits = ["Apple", "Banana", "Mango", "Orange"];

//? 1: for of loop , also known as iterable
//* for...of Loop: The for...of loop is used to iterate over the values of an iterable object, such as arrays, strings, or other iterable objects.


// for (let item1 of fruits) {
//     console.log(item1);
//     }

//? 2: for in loop
//* for...in Loop: The for...in loop is used to iterate over the properties (including indices) of an object.

// for (let item2 in fruits) {
//     console.log(item2);
// } 

// for ( let item = 0; item < fruits.length; item++) {
//     console.log(fruits[item]);
// }

// ? 3: forEach Method
//* The arr.forEach() method calls the provided function once for each element of the array. The provided function may perform any kind of operation on the elements of the given array.

// Array.prototype.myForEach = function (callback) {
//     for (let i = 0; i < this.length; i++) {
//         callback(this[i], i, this);
//     }
// }

// fruits.forEach((curElem, index, arr) => {
    // console.log(`${curElem} ${index} `);
    // console.log(arr);
// });
// ? 4: map function
//* map() creates a new array from calling a function for every array element. map() does not change the original array.

// const myForEach = fruits.map((curElem, index, arr) => {
//     // return `${curElem} ${index} `;
//     return ` my favourite fruit is ${curElem}`;
// });
// console.log(myForEach);
// console.log(fruits);

//todo Practice Time
//! write a program to Multiply each element with 2
// const numbers = [1, 2, 3, 4, 5];
// // forEach -  Performs an action on each element
// // map -  Creates a new array with transformed elements

// numbers.forEach((curElem) => {
//     console.log(curElem * 2);
// });

// const doubleValue = numbers.map((curElem) => {
//    return curElem * 2
// });
// console.log(doubleValue);

//* ==========================================================================
//*  How to Insert, Add, Replace and Delete Elements in Array(CRUD) - p1
//* ==========================================================================


//? 👉 How to Insert, Add, Replace and Delete Elements in Array(CRUD)

// fruits = ["Apple", "Banana", "Mango", "Orange"];

//? 1: push(): Method that adds one or more elements to the end of an array.

// fruits.push("Pineapple");
// console.log(fruits); // ["Apple", "Banana", "Mango", "Orange", "Pineapple"]

//? 2: pop(): Method that removes the last element from an array.

// fruits.pop();
// console.log(fruits); // ["Apple", "Banana", "Mango", ]   

//? 3: unshift(): Method that adds one or more elements to the beginning of an array.

// console.log(fruits.unshift("Pineapple"));
// console.log(fruits); // ["Pineapple", "Apple", "Banana", "Mango"]

//? 4: shift(): Method that removes the first element from an array.

// console.log(fruits.shift());
// console.log(fruits); // ["Banana", "Mango", "Orange"]

//* ==========================================================================
//*  what if, we want to add or remove anywhere in an elements - p2
//* ==========================================================================

//? The splice() method of Array instances changes the contents of an array by removing or replacing existing elements and/or adding new elements in place

//* syntax
//? splice(start, deleteCount, item1, item2, /* …, */ itemN)
// let fruits = ["apple", "orange", "banana", "mango"];

//! what if you want to add the element at the end

// console.log(fruits.splice(0));

// fruits.splice(1,1,"grapes");
// console.log(fruits);

//todo Challenge time
//? 1: Add Dec at the end of an array?
// ? 2: What is the return value of splice method?
//? 3: Update march to March (update)?
//? 4: Delete June from an array?

// const months = ["Jan", "march", "April", "June", "July"];

// 1
//  months.splice(5,0,"Dec");
// console.log(months);

// 2
// when used to add elements, it returns an empty array {[]}

// 3
// const indexToUpdate = months.indexOf("march");
// months.splice(indexToUpdate, 1, "March");
// console.log(indexToUpdate);

// 4
// const indexToDelete = months.indexOf("June");
// months.splice(indexToDelete, 1);
// console.log(months);

//* =========================================
//*  Searching in an Array
//* =========================================
//?👉  Searching and Filter in an Array

//? For Search we have - indexOf, lastIndexOf & includes

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//?1: indexOf Method: The indexOf method returns the first index at which a given element can be found in the array, or -1 if it is not present.
// syntax
// indexOf(searchElement);
// indexOf(searchElement, fromIndex);
// console.log(numbers.indexOf(6)); // 5

//? 2: lastIndexOf Method: The lastIndexOf() method of Array instances returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex.

//  const numbers = [1, 2, 3, 6, 4, 5, 6, 7, 8, 9];
//  const result = numbers.indexOf(2);
//     console.log(result);
//  const result1 = numbers.lastIndexOf(7);
//  console.log(result1);
// const result = numbers.lastIndexOf(6,5);
// console.log(result);


//? 3: The includes method checks whether an array includes a certain element, returning true or false.
// Syntax
// includes(searchElement)
// includes(searchElement, fromIndex)

// const numbers = [1, 2, 3, 6, 7, 8, 9];
// const result = numbers.includes(5);
// console.log(result);

//* =========================================
//*  Filter in an Array
//* =========================================
//? Search +  Filter
// const numbers = [1, 2, 3, 4, 5, 4, 6, 7, 8, 6, 9];

//? 1: find Method: The find method is used to find the first element in an array that satisfies a provided testing function. It returns the first matching element or undefined if no element is found.

// const result = numbers.find((curElem) => curElem > 5);
// console.log(result);

//? 2: findIndex Method: The findIndex() method of TypedArray instances returns the index of the first element in a typed array that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned.

// const result = numbers.findIndex((curElem) => curElem > 5);
// console.log(result);

//* 3:  filter Method: The filter method creates a new array with all elements that pass the test implemented by the provided function.
// syntax:
//? filter(callbackFn)
//? filter(callbackFn, thisArg)

// const result = numbers.filter((curElem) => curElem > 5);
// console.log(result);

// UseCase: In E-commerce website when we want to Remove or delete any product from addToCart page.
//! Ex. le'ts say user wants to delete value 6.
// let value = 6;
// const numbers = [1, 2, 3, 4, 6, 5, 6, 7, 8, 9];

// let filteredNumbers = numbers.filter((curElem) =>{
//     return curElem !== value;
// });
// console.log(filteredNumbers);

// Practice time
// !Example 2: Filtering Products by Price

// const products = [
//   { name: "Laptop", price: 1200 },
//   { name: "Phone", price: 800 },
//   { name: "Tablet", price: 300 },
//   { name: "Smartwatch", price: 150 },
// ];

// // Filter products with a price less than or equal to 500

// const filteredProducts = products.filter((curElem) => {  
//    return curElem.price <= 500;
// });
// console.log(filteredProducts);

// //! Filter unique values
// const numbers = [1, 2, 3, 4, 6, 5, 6, 7, 8, 9];
// let uniqueArray = numbers.filter((curElem, index, arr) => {
//     return arr.indexOf(curElem) === index;
// });
// console.log(uniqueArray);

// console.log([...new Set(numbers)]); // [1, 2, 3, 4, 6, 5, 7, 8, 9]


//* =========================================
//*  How to Sort and Compare an Array
//* =========================================
//? How to Sort and Compare an Array
//? Sorting an Array: The sort method sorts the elements of an array in place and returns the sorted array. By default, it sorts elements as strings.

// const fruits = ["Banana", "Apple", "Orange", "Mango"];
// fruits.sort();
// console.log(fruits); // ["Apple", "Banana", "Mango", "Orange"]

// const numbers = [1, 2, 3, 6, 2, 9 , 4, 5, 6, 7, 8, 9];
// numbers.sort();
// console.log(numbers); // [1, 2, 2, 3, 4, 5, 6, 6, 7, 8, 9, 9]


// ? compare callback function
// numbers.sort((a, b) => {
//     return a - b;
// });
// console.log(numbers);

// if (a > b) { return 1; } => b comes first
// if (a < b) { return -1; } => a comes first

//? Sorting Numbers
// numbers.sort((a, b) => {
//     if (a > b) return 1;
//     if (a < b) return -1;
//     });
// console.log(numbers);

// ? reverse sorting
// numbers.sort((a, b) => {
//     if (a < b) return 1;
//     if (a > b) return -1;
//     });
// console.log(numbers);


// //? Sorting Strings
// const fruits = ["Banana", "Apple", "Orange", "Mango"];
// fruits.sort();
// console.log(fruits); // ["Apple", "Banana", "Mango", "Orange"]


//* =========================================
//*  Very Important Array Methods
//* =========================================

//? Map(), Filter(), Reduce(),
// map() creates a new array from calling a function for every array element.
// map() does not execute the function for empty elements.
// map() does not change the original array.

//? Map(), Reduce(), Filter()
// map() creates a new array from calling a function for every array element.
// map() does not execute the function for empty elements.
// map() does not change the original array.

// Original array of numbers
// const numbers = [1, 2, 3, 4, 5];

//! Using map to square each number and create a new array
// const numbers = [1, 2, 3, 4, 5];

// let result = numbers.map((curElem) => {
//     return curElem * curElem;
// });
// console.log(result);

// ! 1: Using the map method, write a function that takes an array of numbers and returns a new array where each string is capitalized.

// const names = ["john", "smith", "karl"];
// let result1 = names.map((curElem) => {
//     return curElem.toUpperCase();
// });
// console.log(result1);

// ! 2: Using the map method,write a function that takes an array of numbers and returns a new array where each number is squared, but only if the original number is even.

// const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let result2 = numbers1.map((curElem) => {
//     return curElem % 2 ==! 0 ? curElem * curElem : curElem;
// });
// console.log(result2);


// ! 3: Using the map method, write a function that takes an array of numbers and returns a new array where each number is prefixed with "Mr."

// const names = ["john", "smith", "karl"];
// let result3 = names.map((curElem) => {
//     return `Mr. ${curElem}`;
// });
// console.log(result3);

//? Reduce method
// The reduce method in JavaScript is used to accumulate or reduce an array to a single value. It iterates over the elements of an array and applies a callback function to each element, updating an accumulator value with the result. The reduce method takes a callback function as its first argument and an optional initial value for the accumulator as the second argument.
// syntax
// array.reduce(function callback(accumulator, currentValue, index, array) {
//   // Your logic here
//   // Return the updated accumulator value
// }, initialValue);

// callback: A function that is called once for each element in the array.
// accumulator: The accumulated result of the previous iterations.
// currentValue: The current element being processed in the array.
// index (optional): The index of the current element being processed.
// array (optional): The array reduce was called upon.
// initialValue (optional): An initial value for the accumulator. If not provided, the first element of the array is used as the initial accumulator value.



const productPrice = [100, 200, 300, 400, 500];
const totalProductPrice = productPrice.reduce((acc, curElem) => {
    return acc + curElem;
}, 0);
console.log(totalProductPrice);

