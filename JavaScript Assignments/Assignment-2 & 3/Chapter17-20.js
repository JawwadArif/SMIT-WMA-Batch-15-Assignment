// 1. Declare and initialize an empty multidimensional array.
// (Array of arrays)

let arr = [[], [], []];
// console.log("Empty Multidimensional Array:", multiArray);

//Q2 Declare and initialize a multidimensional array
//representing the following matrix:

//ANS
let matrix = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1]
];
console.log("Matrix:", matrix);

// 3. Write a program to print numeric counting from 1 to 10.

document.write("Counting 1 to 10:<br>");
for (let i = 1; i <= 10; i++) {
    document.write(`${i} <br>`);
}

//Q4 Write a program to print multiplication table of any
//number using for loop. Table number & length should be
//taken as an input from user. 

let number = parseInt(prompt("Enter number for multiplication table:"));
let length1 = parseInt(prompt("Enter table length:"));
document.write(`Multiplication Table of ${number}:<br>`);
for (let i = 1; i <= length1; i++) {
    document.write(`${number} × ${i} = ${number * i} <br>`);
}

// 5. Write a program to print items of the following array
// using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”,
// “strawberry”]

let fruits = ["apple", "banana", "mango", "orange", "strawberry"];

document.write("<h2>Fruits:</h2>");
for (let i = 0; i < fruits.length; i++) {
    document.write(fruits[i] + "<br>");
}

// Q6 Generate the following series in your browser. See
//example output.
//a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
//b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
//c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
//d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
//e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

//ans
document.write("<h2>Counting:</h2>");
for (let i = 1; i <= 15; i++) {
    document.write(i + (i < 15 ? ", " : ""));
}

// b. Reverse counting: 10 to 1
document.write("<h2>Reverse Counting:</h2>");
for (let i = 10; i >= 1; i--) {
    document.write(i + (i > 1 ? ", " : ""));
}

// c. Even: 0 to 20
document.write("<h2>Even Numbers:</h2>");
for (let i = 0; i <= 20; i += 2) {
    document.write(i + (i < 20 ? ", " : ""));
}

// d. Odd: 1 to 19
document.write("<h2>Odd Numbers:</h2>");
for (let i = 1; i < 20; i += 2) {
    document.write(i + (i < 19 ? ", " : ""));
}

// e. Series: 2k to 20k
document.write("<h2>Series:</h2>");
for (let i = 2; i <= 20; i += 2) {
    document.write((i * 2) + "k" + (i < 20 ? ", " : ""));
}

// 7. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array.
// After searching, prompt the user whether the given item is
// found in the list or not. Example:

let A = ["cake", "apple pie", "cookie", "chips", "patties"];
let userInput = prompt("Enter an item to search in the list:");
if (A.includes(userInput)) {
    document.write(`<br> ${userInput} is found in the list. <br>`);
} else {
    document.write(`<br> ${userInput} is not found in the list. <br>`);
} 

// 8. Write a program to identify the largest number in the
// given array.
// A = [24, 53, 78, 91, 12].

   let array = [24, 53, 78, 91, 12];

   let largest = array[0]; 
   for (let i = 1; i < array.length; i++) {
       if (array[i] > largest) {
           largest = array[i]; 
       }
   }
   document.write(`<h2>The largest number in the array is: ${largest}</h2>`);   

//    9. Write a program to identify the smallest number in the
// given array.
// A = [24, 53, 78, 91, 12]
let array1 = [24, 53, 78, 91, 12];

let smallest = array1[0];
for (let i = 1; i < array1.length; i++) {
    if (array1[i] < smallest) {
        smallest = array1[i]; 
    }
}
document.write(`<h2>The smallest number in the array is: ${smallest}</h2>`);


// 10. Write a program to print multiples of 5 ranging 1 to 100.

document.write("Multiples of 5 (1-100):");
for (let i = 5; i <= 100; i += 5) {
    document.write(i + ",");
}

