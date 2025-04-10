// 1. Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your
// browser:

// document.write("<h3>Result:</h3>");
// let a = 10;
// document.write(`The value of a is : ${a}<br>`);
// document.write(`...................................................<br>`);

// ++a;
// document.write(`The value of ++a is ${a}<br>`);
// document.write(`Now the value of a is ${a}<br><br>`);

// document.write(`The value of a++ is ${a}<br>`);
// a++;
// document.write(`Now the value of a is ${a}<br><br>`);

// --a;
// document.write(`The value of --a is ${a}<br>`);
// document.write(`Now the value of a is ${a}<br><br>`);

// document.write(`The value of a-- is ${a}<br>`);
// a--;
// document.write(`Now the value of a is ${a}<br>`);



// 2. What will be the output in variables a, b & result after
// execution of the following script:
var a = 2, b = 1;
var result = --a - --b + ++b + b--;
document.write(`a is ${a}<br>`);
document.write(`b is ${b}<br>`);
document.write(`Result is ${result}<br>`);
// Explain the output at each stage:
// --a; 2 - 1 = 1
// --a - --b; a = 1 and b = 1 - 1 = 0  so 1 - 0 = 1
// --a - --b + ++b;  --a - --b = 1 now  b = 1 now ++b = 2  so 1 + 2 = 3
// --a - --b + ++b + b--; --a - -- b + ++b = 3 and b = 1 then --b = 1 - 0 so answer is 3

// 3. Write a program that takes input a name from user &
// greet the user.

let name = prompt("Enter Your Name : ");

alert(`welcome ${name}`);

// 4. Write a program to take input a number from user &
// display it’s multiplication table on your browser. If user
// does not enter a new number, multiplication table of 5
// should be displayed by default.

let num = +prompt("enter a number", "5");

num= num?parseInt(num):5;

for (let i = 1; i <= 10; i++) {
    document.write(`${num} x ${i} = ${num*i}<br>`);
}

// 5. Take
// a) Take three subjects name from user and store them in 3
// different variables.
// b) Total marks for each subject is 100, store it in another
// variable.
// c) Take obtained marks for first subject from user and
// stored it in different variable.
// d) Take obtained marks for remaining 2 subjects from user
// and store them in variables.
// e) Now calculate total marks and percentage and show the
// result in browser like this.(Hint: user table)
    // Input subject names
    let sub1 = prompt("Enter the first subject name:");
    let sub2 = prompt("Enter the second subject name:");
    let sub3 = prompt("Enter the third subject name:");

    let totalMarksPerSubj = 100;
    let totalMarks = totalMarksPerSubj * 3;

    // Input obtained marks
    let sub1Marks = parseInt(prompt("Enter marks for the first subject:"));
    let sub2Marks = parseInt(prompt("Enter marks for the second subject:"));
    let sub3Marks = parseInt(prompt("Enter marks for the third subject:"));

    // Calculate obtained marks and percentage
    let obtainMarks = sub1Marks + sub2Marks + sub3Marks;
    let percentage = (obtainMarks / totalMarks) * 100;

    // Create a table to display results
    document.write(`<table>`);
    document.write(`<tr> 
        <th>Subject</th>
        <th>Total Marks</th>
        <th>Obtained Marks</th>
        <th>Percentage</th>
    </tr>`);

    // Subject 1 row
    document.write(`<tr>
        <td>${sub1}</td>
        <td>${totalMarksPerSubj}</td>
        <td>${sub1Marks}</td>
        <td>${((sub1Marks / totalMarksPerSubj) * 100).toFixed(2)}%</td>
    </tr>`);

    // Subject 2 row
    document.write(`<tr>
        <td>${sub2}</td>
        <td>${totalMarksPerSubj}</td>
        <td>${sub2Marks}</td>
        <td>${((sub2Marks / totalMarksPerSubj) * 100).toFixed(2)}%</td>
    </tr>`);

    // Subject 3 row
    document.write(`<tr>
        <td>${sub3}</td>
        <td>${totalMarksPerSubj}</td>
        <td>${sub3Marks}</td>
        <td>${((sub3Marks / totalMarksPerSubj) * 100).toFixed(2)}%</td>
    </tr>`);

    // Total row
    document.write(`<tr>
        <td><strong>Total</strong></td>
        <td>${totalMarks}</td>
        <td>${obtainMarks}</td>
        <td><strong>${percentage.toFixed(2)}%</strong></td>
    </tr>`);

    document.write(`</table>`);
