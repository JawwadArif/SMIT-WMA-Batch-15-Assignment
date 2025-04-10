// // 1. Declare an empty array using JS literal notation
let studentNames = [];

// // 2. Declare an empty array using JS object notation
let studentNamesObj = new Array();

// 3. Declare and initialize a strings array
let stringArray = ["Ali", "Jawwad", "Umar", "Abdullah"];
document.write("<strong>String Array:</strong> " + stringArray.join(", ") + "<br>");

// // 4. Declare and initialize a numbers array
let numbersArray = [10, 20, 30, 40, 50];
document.write("<strong>Numbers Array:</strong> " + numbersArray.join(", ") + "<br>");

// // 5. Declare and initialize a boolean array
let booleanArray = [true, false, true, false];
document.write("<strong>Boolean Array:</strong> " + booleanArray.join(", ") + "<br>");

// // 6. Declare and initialize a mixed array
let mixedArray = ["Jawwad", 25, true, 3.14, "Student"];
document.write("<strong>Mixed Array:</strong> " + mixedArray.join(", ") + "<br>");

// // 7. Declare and Initialize an array for education qualifications in Pakistan
let qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil.", "PhD"];

document.write("<h3>Educational Qualifications in Pakistan:</h3>");
document.write("<ul>");
for (let i = 0; i < qualifications.length; i++) {
    document.write(`<li>${qualifications[i]}</li>`);
}
document.write("</ul>");

// //8. Write a program to store 3 student names in an array.Take
// // another array to store score of these three students.
// // Assume that total marks are 500 for each student, display
// // the scores & percentages of students like:
let students = ["Ali", "Umar", "Jawwad"];

// Store their scores in another array
let scores = [450, 390, 470];

// Assume total marks for each student
let totalMarks = 500;

// Display the results
document.write("<table>");
document.write("<tr><th>Student Name</th><th>Score</th><th>Percentage</th></tr>");

for (let i = 0; i < students.length; i++) {
    let percentage = (scores[i] / totalMarks) * 100;
    document.write(`<tr><td>${students[i]}</td><td>${scores[i]}</td><td>${percentage.toFixed(2)}%</td></tr>`);
}

document.write("</table>");


// // 9. Initialize an array with color names. Display the array
// // elements in your browser.
// // a. Ask the user what color he/she wants to add to the
// // beginning & add that color to the beginning of the array.
// // Display the updated array in your browser.
// // b. Ask the user what color he/she wants to add to the end
// // & add that color to the end of the array. Display the
// // updated array in your browser.
// // c. Add two more color to the beginning of the array.
// // Display the updated array in your browser.
// // d. Delete the first color in the array. Display the updated
// // array in your browser.
// // e. Delete the last color in the array. Display the updated
// // array in your browser.
// // f. Ask the user at which index he/she wants to add a color
// // & color name. Then add the color to desired
// // position/index. . Display the updated array in your
// // browser.
// // g. Ask the user at which index he/she wants to delete
// // color(s) & how many colors he/she wants to delete. Then

// // Arrays | JAVASCRIPT

// // Page 3 of 6
// // remove the same number of color(s) from user-defined
// // position/index. . Display the updated array in your
// // browser.

let colors = ["Red", "Blue", "Green", "Yellow"];
document.write("<strong>Original Colors:</strong> " + colors.join(", ") + "<br><br>");

let colorStart = prompt("Enter a color to add at the beginning:");
colors.unshift(colorStart);
document.write("<strong>After adding at the beginning:</strong> " + colors.join(", ") + "<br><br>");

let colorEnd = prompt("Enter a color to add at the end:");
colors.push(colorEnd);
document.write("<strong>After adding at the end:</strong> " + colors.join(", ") + "<br><br>");

colors.unshift("Purple", "Orange");
document.write("<strong>After adding two more colors at the beginning:</strong> " + colors.join(", ") + "<br><br>");

colors.shift();
document.write("<strong>After removing the first color:</strong> " + colors.join(", ") + "<br><br>");

colors.pop();
document.write("<strong>After removing the last color:</strong> " + colors.join(", ") + "<br><br>");

let addIndex = prompt("Enter the index where you want to add a new color:");
let addColor = prompt("Enter the color name:");
addIndex = parseInt(addIndex);
if (addIndex >= 0 && addIndex <= colors.length) {
    colors.splice(addIndex, 0, addColor);
}
document.write("<strong>After inserting color at specific index:</strong> " + colors.join(", ") + "<br><br>");

let delIndex = prompt("Enter the index from where you want to delete color(s):");
let delCount = prompt("Enter how many colors you want to delete:");
delIndex = parseInt(delIndex);
delCount = parseInt(delCount);
if (delIndex >= 0 && delIndex < colors.length) {
    colors.splice(delIndex, delCount);
}
document.write("<strong>After deleting color(s) at specific index:</strong> " + colors.join(", ") + "<br><br>");


//10 Write a program to store student scores in an array &
// sort the array in ascending order using Array’s sort
// method.

let score = [320, 230, 480, 120];
document.write(`Scores of Student ${score} <br>`);
score.sort((a, b) => a - b);
document.write(`Ordered Scores of Student ${score}<br>`);


// 11. Write a program to initialize an array with city names.
// Copy 3 array elements from cities array to selectedCities
// array.

let cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
document.write("Cities: <br>");
for (let i = 0; i < cities.length; i++) {
    document.write(cities[i] + " \,  ");
}
document.write("<br><br>");
let selectedCities = cities.splice(2, 3);
document.write("Selected Cities: <br>");
for (let i = 0; i < selectedCities.length; i++) {
    document.write(selectedCities[i] + " \,  ");
}

// 12. Write a program to create a single string from the
// below mentioned array:
// (Use array’s join method)

let arr = ["This ", " is ", " my ", " cat"];

document.write(arr.join(""));

// 13. Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they
// were stored. (FIFO-First In First Out)

let queue = [];
queue.push("Keyboard");
queue.push("Mouse");
queue.push("Printer");
queue.push("Monitor");

for (let i = 0; i < queue.length; i++) {
    document.write("Out: <br>" + queue[i] + "<br>")
}

// 14. Create a new array. Store values one by one in such a way
// that you can access the values in reverse order. (Last In-
// First Out)

let stack = [];
stack.push("Keyboard");
stack.push("Mouse");
stack.push("Printer");
stack.push("Monitor");

for (let i = stack.length - 1; i >= 0; i--) {
    document.write("Out: <br>" + stack[i] + "<br>")
}

// 15. Write a program to store phone manufacturers (Apple,
//     Samsung, Motorola, Nokia, Sony & Haier) in an array.
//     Display the following dropdown/select menu in your
//     browser using document.write() method:

let phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

document.write("<select>");

for (let i = 0; i < phoneManufacturers.length; i++) {
    document.write("<option>" + phoneManufacturers[i] + "</option>");
}

document.write("</select>");
