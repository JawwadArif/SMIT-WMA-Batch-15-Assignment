// 1. Write a program that take two numbers & add them in a
// new variable. Show the result in your browser.

let num1 = +prompt("Enter a 1st Value : ");
let num2 = +prompt("Enter a 2nd Value : ");
let sum = num1 + num2;
document.write(`Sum of ${num1} and ${num2} is ${sum}<br>`);

// 2. Repeat task1 for 
// subtraction,

let num3 = +prompt("Enter a 1st Value : ");
let num4 = +prompt("Enter a 2nd Value : ");
let sub = num3 - num4;
document.write(`Sub of ${num3} and ${num4} is ${sub}<br>`);

//  multiplication, 

let num5 = +prompt("Enter a 1st Value : ");
let num6 = +prompt("Enter a 2nd Value : ");
let mul = num5 * num6;
document.write(`mul of ${num5} and ${num6} is ${mul}<br>`);

// division &

let num7 = +prompt("Enter a 1st Value : ");
let num8 = +prompt("Enter a 2nd Value : ");
let div = num5 / num6;
document.write(`div of ${num7} and ${num8} is ${div}<br>`);

// modulus.

let num9 = +prompt("Enter a 1st Value : ");
let num10 = +prompt("Enter a 2nd Value : ");
let mod = num5 % num6;
document.write(`mod of ${num9} and ${num10} is ${mod}<br>`);


// 3. Do the following using JS Mathematic Expressions
// a. Declare a variable.
// b. Show the value of variable in your browser like “Value
// after variable declaration is: ??”.
// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial
// value: 5”.
// e. Increment the variable.
// f. Show the value of variable in your browser like “Value
// after increment is: 6”.
// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Valueafter addition is: 13”.
// i. Decrement the variable.
// j. Show the value of variable in your browser like “Value
// after decrement is: 12”.
// k. Show the remainder after dividing the variable’s value
// by 3.
// l. Output : “The remainder is : 0”.

let var1;
document.write(`Value after variable declaration is: ${var1}<br>`);

var1 = 5;
document.write(`Initial Value: ${var1}<br>`);

var1++;
document.write(`Value after Increment is: ${var1}<br>`);

var1 += 7;
document.write(`Value after addition is: ${var1}<br>`);

var1--;
document.write(`Value after Decrement is : ${var1}<br>`);

let remainder = var1 % 3;
document.write(`The remainder is: ${remainder}<br>`)

// 4. Cost of one movie ticket is 600 PKR. Write a script to
// store ticket price in a variable & calculate the cost of buying 5
// tickets

let ticket = 600;

let totalticket = 5 * ticket;

document.write(`Total cost to buy 5 tickets to a movie is ${totalticket} <br>`);

//5. Write a script to display multiplication table of any
// number in your browser. E.g

let number = +prompt("Enter any number : ");
document.write(`Table of ${number} <br>`);
for (let i = 1; i <= 10; i++) {
    document.write(`${number} × ${i} = ${number * i} <br>`);
}


//6. converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.

// Conversion Formulae:
let cel=25;

let Fah = (cel * 9/5) + 32;
document.write(`${cel}°C is ${Fah}°F <br>`);


let Fahrenheit = 70;

let celsius = (Fahrenheit-32) * 5/9;
document.write(`${Fahrenheit}°F is ${celsius}°C <br>`);

// 7. Write a program to implement checkout process of a
// shopping cart system for an e-commerce website. Store
// the following in variables
// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges

// Compute the total cost & show the receipt in your browser.

let item1 = 650;
let item2 = 100;
let quantityitem1 = 3;
let quantityitem2 = 7;
let shippingCharges = 100;

totalCost= (item1 * quantityitem1) + (item2 *quantityitem2) + shippingCharges;

document.write(`<h2>Shopping Cart</h2>`);
document.write(`price of item 1 is ${item1}<br>`);
document.write(`quantity of item 1 is ${quantityitem1}<br>`);
document.write(`price of item 2 is ${item2}<br>`);
document.write(`quantity of item 2 is ${quantityitem2}<br>`);
document.write(`shipping charges is ${shippingCharges}<br>`);
document.write(`Total cost of your order is ${totalCost}<br>`);

// 8. Store total marks & marks obtained by a student in 2
// variables. Compute the percentage & show the result in
// your browser

document.write(`<h1>MarkSheet</h1>`)
let totalmarks = 980;
let obtainedMarks = 804;

let percentage = obtainedMarks * 100 / totalmarks;

document.write(`Total Marks : ${totalmarks} <br>`);
document.write(`Obtained Marks : ${obtainedMarks} <br>`);
document.write(`Percentage : ${percentage} <br>`);



// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a
// script to convert the total currency to Pakistani Rupees.
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
// and 1 Saudi Riyal = 28 Pakistani Rupee)

let usd = 10;
let riyal = 25;

let Exchange = (10*104.80) + (25*28);
document.write(`Total Currency in PKR is ${Exchange}<br><br>`)




// 10. Write a program to initialize a variable with some
// number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression

let number1 = ((2+5)*10)/2; 

document.write(`total calculation is ${number1}<br><br>`)



// question 11
// 11. The Age Calculator: Forgot how old someone is?
// Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored
// values.

// Output them to the screen like so: “They are either NN or NN
// years old”.
let currentYear = +prompt("Enter Current Year : ");
let birthYear = +prompt("Enter Birth Year : ");

document.write(`<h2>Age Calculator</h2>`);
document.write(`current year: ${currentYear}<br>`);
document.write(`Birth Year: ${birthYear}<br>`);
document.write(`They are either ${currentYear-birthYear-1} or ${currentYear-birthYear} years old<br>`);

// // question 12
// The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.b. Calculate the circumference based on the radius, and
// output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The
// area is NN”. (Hint : Area of a circle = π r2, π = 3.142)
 let radius = 20;

let circumference = 20*2*3.142

let areaCircle = 400 *3.142
document.write(`<h2>The Geometrizer</h2>`)
document.write(`radius of a circle: ${radius}<br>`)
document.write(`The circumference: ${circumference}<br>`)
document.write(`The area is: ${areaCircle}<br>`)

// // question 13
// 13. The Lifetime Supply Calculator: Ever wonder how
// much a “lifetime supply” of your favorite snack is?
// Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of
// your life.
// Output the result to the screen like so: “You will need
// NNNN to last you until the ripe old age of NN”.
let favtSnack = "chocalate";
let currAge = 22;
let maxAge = 63;
let perDay = 2;

let remainingYear = (maxAge - currAge) * 365 * perDay;

document.write(`<h2>The Life Time Supply Calculator</h2>`)
document.write(`Favourite Snack: ${favtSnack}<br>`)
document.write(`current age: ${currAge}<br>`)
document.write(`Estimated Maximum Age: ${maxAge}<br>`)
document.write(`Ammount Per Day: ${perDay}<br>`)
document.write(`You will need ${remainingYear} ${favtSnack} to last you until the ripe old age of ${maxAge}<br>`)





