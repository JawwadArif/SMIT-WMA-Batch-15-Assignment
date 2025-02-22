// 1. Write a program to take “city” name as input from user. If
// user enters “Karachi”, welcome the user like this:
// “Welcome to city of lights”

var city = prompt("Enter City Name : ");
if (city == "Karachi") {
    alert("Welcome to city of lights");
} else {
    alert("Welcome to " + city);
}

// 2. Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the
// user is female, give the message: Good Morning Ma’am.
var gender = prompt("Enter your gender : ");
if (gender == "Male") {
    alert("Good Morning Sir");
} else {
    alert("Good Morning Ma'am");
}

//  3. Write a program to take input color of road traffic signal
//  from the user & show the message according to this table:
//  Signal color Message
//  Red Must Stop
//  Yellow Ready to move
//  Green Move now

var inputColor = prompt("Enter the color : ");
if (inputColor == 'red')
    alert("Must Stop");
else if (inputColor == 'yellow')
    alert("Ready to Move");
else
    alert("Move now");


// 4. Write a program to take input remaining fuel in car(in
//litres) from user.If the current fuel is less than 0.25litres,
//show the message “Please refill the fuel in your car”

var fuel = Number(prompt("Enter the remaining fuel : "));
if (fuel <= 0.25)
    alert("Please refill the fuel in your car");
else
    alert("Fuel is Enough");

// 5. Run this script, & check whether alert message would be
// displayed or not. Record the outputs.


// a.var a = 4;
// if (++a === 5) {
//     alert("given condition for variable a is true");
// }
// b.var b = 82;
// if (b++ === 83) {
//     alert("given condition for variable b is true");
// }
// c.var c = 12;
// if (c++ === 13) {
//     alert("condition 1 is true");
// }
// if (c === 13) {
//     alert("condition 2 is true");
// }
// if (++c < 14) {
//     alert("condition 3 is true");
// }
// if (c === 14) {
//     alert("condition 4 is true");
// }
// d.var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost) {
//     alert("The cost equals");
// }
// e.if(true){
//     alert("True");
// }
// if (false) {
//     alert("False");
// }
// f.if("car" < "cat"){
//     alert("car is smaller than cat");
// }
// Alert message is not displayed


// 6. Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute
// grade as per following table:

document.write("<h1>Marksheet</h1>");

var obtMarks = Number(prompt("Enter the Obtained Marks : "));
var totalMarks = 300;
var perc = (obtMarks * 100) / totalMarks;

if (perc >= 80){
    var grade = 'A-one';
    var remarks = 'Excellent';
}
else if (perc >= 70){
    var grade = 'A';
    var remarks = 'Good';
}
else if (perc >= 60){
    var grade = 'B';
    var remarks = 'You need to improve';
}
else {
    var grade = 'F';
    var remarks = 'Sorry';
}

document.write("Total Marks : " + totalMarks + "<br>");
document.write("Obtained Marks : " + obtMarks + "<br>");
document.write("Percentage : " + perc + "<br>");
document.write("Grade : " + grade + "<br>");
document.write("Remarks : " + remarks + "<br>");


// 7. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.

var secretNum = 7;
var guessNum = Number(prompt("Guess the Number : "));
if (guessNum === secretNum){
    alert("Bingo! Correct Guess");
} 
else if (guessNum+1 === secretNum) {
    alert("Close Enough to the correct answer.");
}
else {
    alert("Wrong Guess!");
}

// 8. Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number
// is divisible by 3.

var num = Number(prompt("Enter a number : "));
if (num % 3 == 0){
    alert("Number is divisible by 3");
}
else {
    alert("Number is not divisible by 3")
}

// 9. Write a program that checks whether the given input is an
// even number or an odd number.

var num1 = Number(prompt("Enter a Number : "));
if (num1 % 2 == 0){
    alert("Given number is even");
} 
else {
    alert("Given number is odd");
}


// 10. Write a program that takes temperature as input and
// shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”

var temp = Number(prompt("Enter a Temperature : "));
if (temp > 40)
    alert("It is too hot outside.");
else if (temp > 30)
    alert("The Weather today is Normal.");
else if (temp > 20)
    alert("Today’s Weather is cool.");
else if (temp > 10)
    alert("OMG! Today’s weather is so Cool.");

// 11. Write a program to create a calculator for +,-,*, / & %
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.

var num3 = Number(prompt("Enter 1st number : "));
var num4 = Number(prompt("Enter 2nd number : "));

var operation = prompt("Enter Operation to Perform : ");
if (operation == '+') {
    var result = num3 + num4;
}
else if (operation == '-') {
    var result = num3 - num4;
}
else if (operation == 'x') {
    var result = num3 * num4;
}
else if (operation == '/') {
    var result = num3 / num4;
}
else if (operation == '%') {
    var result = num3 % num4;
}
else {
    alert("Wrong Operation");
}

alert("Result is = " + result);
