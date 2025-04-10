// 1. Simulating an ATM Withdrawal System
// Category: Banking & Finance
// 📌 Problem:
//  Create a simple ATM withdrawal system where:
// The user enters the amount they want to withdraw.
// The system checks if the amount is available in the ATM.
// The system dispenses the correct number of bills in denominations of 100, 500, and 1000.
// If the amount is not a multiple of 100, show an error message.

let available1000 = 10;
let available500 = 20;
let available100 = 30;

document.write("<h1>ATM Withdrawal System</h1> <br>");

let input = prompt("Enter the amount to withdraw (or 'exit' to quit):");

if (input.toLowerCase() === 'exit') {
    document.write("Exiting the ATM. Thank you!");
} else {
    let amount = parseInt(input);

    if (isNaN(amount) || amount % 100 !== 0) {
        document.write("Error: Enter a valid amount (multiple of 100).");
    } else {
        let bills1000 = Math.min(Math.floor(amount / 1000), available1000);
        amount -= bills1000 * 1000;

        let bills500 = Math.min(Math.floor(amount / 500), available500);
        amount -= bills500 * 500;

        let bills100 = Math.min(Math.floor(amount / 100), available100);
        amount -= bills100 * 100;

        if (amount > 0) {
            document.write("Error: Cannot dispense the exact amount.");
        } else {
            document.write("You received:<br>");
            if (bills1000) document.write(bills1000 + " x 1000<br>");
            if (bills500) document.write(bills500 + " x 500<br>");
            if (bills100) document.write(bills100 + " x 100<br>");
        }
    }
}


// //  2. Parking Lot Fee Calculator
// Category: Transportation & Management
// 📌 Problem:
//  Create a parking fee calculator where:
// The first 2 hours are free.
// After 2 hours, the fee is $5 per hour.
// If the vehicle stays for more than 10 hours, a fixed rate of $50 is charged.

document.write("<h1>Parking Lot Fee Calculator</h1>");

let hours = parseInt(prompt("Enter the number of hours parked:"));
let fee = 0;

if (isNaN(hours)) {
    document.write("Error: Enter a valid number of hours.");
}
else {
    if (hours <= 2) {
        document.write("No fee for the first 2 hours.");
    }
    else if (hours > 10) {
        fee = 50;
        document.write("Your Parking Fee is: $" + fee);
    }
    else {
        fee = (hours - 2) * 5;
        document.write("Your Parking Fee is: $" + fee);
    }
}

// 3. Car Speed Fine System
// Category: Transportation & Management
// 📌 Problem:
//  Create a parking fee calculator where:
// The first 2 hours are free.
// After 2 hours, the fee is $5 per hour.
// If the vehicle stays for more than 10 hours, a fixed rate of $50 is charged.

document.write("<h1>Car Speed Fine System</h1>");

let speed = parseInt(prompt("Enter the speed of the car:"));


if (isNaN(speed)) {
    document.write("Error: Enter a valid speed.");
}
else {
    if (speed <= 60) {
        document.write("Safe Speed.");
    }
    else if (speed > 60 && speed <= 80) {
        document.write("Warning: You are driving above the safe speed.");
    }
    else {
        let fine = (speed - 80) * 1;
        document.write("Your fine is: $" + fine);
    }
}

// 4. Bank Loan Interest Calculator
// Category: Finance & Banking
// 📌 Problem:
//  Create a loan interest calculator where:
// If the loan amount is ≤ $10,000, the interest rate is 5%.
// If it's between $10,001 and $50,000, the interest rate is 7%.
// If it's above $50,000, the interest rate is 10%.
// Calculate the total amount to be paid back.

document.write("<h1>Bank Loan Interest Calculator</h1>");

let loanAmount = parseInt(prompt("Enter the loan amount:"));

if (isNaN(loanAmount)) {
    document.write("Error: Enter a valid loan amount.");
}
else {
    if (loanAmount <= 10000) {
        let interestRate = 0.05;
        let interest = loanAmount * interestRate;
        let totalAmount = loanAmount + interest;
        document.write("Interest Rate: 5%<br>");
    }
    else if (loanAmount > 10000 && loanAmount <= 50000) {
        interestRate = 0.07;
        interest = loanAmount * interestRate;
        totalAmount = loanAmount + interest;
        document.write("Interest Rate: 7%<br>");
    }
    else {
        interestRate = 0.1;
        interest = loanAmount * interestRate;
        totalAmount = loanAmount + interest;
        document.write("Interest Rate: 10%<br>");
    }

    document.write("Total Amount: $" + totalAmount);
}

// 5. Toll Booth System - Vehicle Fee Collection
// 📌 Problem:
//  A toll booth collects different tolls based on vehicle type:
// Car → $5
// Truck → $10
// Bus → $8
// If a vehicle doesn't have enough money, let it pass but record unpaid tolls.

document.write("<h1>Toll Booth System</h1>");

let vehicleType = prompt("Enter the type of vehicle (car, bus, or truck):");

let haveMoney = confirm("Do you have money to pay the fee?");

if (vehicleType.toLowerCase() === "car" && haveMoney) {
    let fee = 5;
    document.write("Your fee is: $" + fee);
}
else if (vehicleType.toLowerCase() === "bus" && haveMoney) {
    fee = 8;
    document.write("Your fee is: $" + fee);
}
else if (vehicleType.toLowerCase() === "truck" && haveMoney) {
    fee = 10;
    document.write("Your fee is: $" + fee);
}
else if (!haveMoney) {
    document.write("OK go. But you count in unpaid tolls.");
    unpaidTolls += 1;
}
else {
    document.write("Error: Enter a valid vehicle type.");
}

// 6. School Exam Result Processing 
// 📌 Problem:
//  A class of 3 students takes 4 subjects. Generate random marks, find average & grade.

document.write("<h1>School Exam Result Processing</h1>");

let student1Marks = [Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)];
let student2Marks = [Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)];
let student3Marks = [Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)];

function calculateAverage(marks) {
    let total = marks[0] + marks[1] + marks[2] + marks[3];
    let average = total / marks.length;
    return average;
}

function grade(average) {
    if (average >= 80) {
        return "A";
    }
    else if (average >= 70) {
        return "B";
    }
    else if (average >= 60) {
        return "C";
    }
    else if (average >= 50) {
        return "D";
    }
    else {
        return "Fail";
    }
}

let student1Average = calculateAverage(student1Marks);
let student2Average = calculateAverage(student2Marks);
let student3Average = calculateAverage(student3Marks);

let student1Grade = grade(student1Average);
let student2Grade = grade(student2Average);
let student3Grade = grade(student3Average);

document.write("Student 1 Average: " + student1Average + "<br>");
document.write("Student 2 Average: " + student2Average + "<br>");
document.write("Student 3 Average: " + student3Average + "<br><br>");

document.write("Student 1 Grade: " + student1Grade + "<br>");
document.write("Student 2 Grade: " + student2Grade + "<br>");
document.write("Student 3 Grade: " + student3Grade + "<br>");

// 7. Student Exam Pass/Fail System 
// 📌 Problem Statement:
//  A university has 8 students who get random exam scores between 0 - 100. A student:
// Passes if score ≥ 50
// Fails if score < 50
//  The program calculates how many students passed and failed.

document.write("<h1>Student Exam Pass/Fail System</h1>");

let pass = 0;
let fail = 0;

let uniStud = [Math.floor(Math.random() * 100), Math.floor(Math.random() * 100),
Math.floor(Math.random() * 100), Math.floor(Math.random() * 100),
Math.floor(Math.random() * 100), Math.floor(Math.random() * 100),
Math.floor(Math.random() * 100), Math.floor(Math.random() * 100),
];

for (let i = 0; i < uniStud.length; i++) {
    if (uniStud[i] >= 50) {
        document.write("Student " + (i + 1) + " has passed the exam.<br>");
        pass++;
    }
    else {
        document.write("Student " + (i + 1) + " has failed the exam.<br>");
        fail++;
    }
}

document.write("Total Pass: " + pass + "<br>");
document.write("Total Fail: " + fail + "<br>");

// 8. Cinema Ticket Booking System 
// 📌 Problem Statement:
//  A cinema has 10 seats available. Customers randomly book seats and pay based on age:
// Children (0-12) → $5
// Adults (13-59) → $10
// Seniors (60+) → $7
//  The program books seats until they are full and calculates total revenue.

let tickets = 10;
let price = 0;

for (let i = 0; i < tickets; i++) {
    let age = parseInt(prompt("Enter your age:"));

    if (age < 0) {
        document.write("Invalid age. Please enter a valid age.<br>");
    }
    else if (age <= 12) {
        price += 5;
        document.write("The ticket price for a child is $5.<br>");
    }
    else if (age <= 59) {
        price += 10;
        document.write("The ticket price for an adult is $10.<br>");
    }
    else {
        price += 7;
        document.write("The ticket price for a senior is $7.<br>");
    }
}

document.write("Total price for all tickets: $" + price);

// 9. Parking Lot Fee Calculation
// 📌 Problem Statement:
//  A parking lot has 15 cars parked. Each car is parked for a random number of hours (1-10 hours).
// Up to 3 hours → $3 per hour
// 4-6 hours → $2 per hour
// 7+ hours → $1 per hour
//  The program calculates total parking fees collected.

document.write("<h1>Parking Lot Fee Calculator</h1>");

let parkingLot = [Math.floor(Math.random() * 10) + 1, Math.floor(Math.random() * 10) + 1,
Math.floor(Math.random() * 10) + 1, Math.floor(Math.random() * 10) + 1,
Math.floor(Math.random() * 10) + 1, Math.floor(Math.random() * 10) + 1,
Math.floor(Math.random() * 10) + 1, Math.floor(Math.random() * 10) + 1,
Math.floor(Math.random() * 10) + 1, Math.floor(Math.random() * 10) + 1,
Math.floor(Math.random() * 10) + 1, Math.floor(Math.random() * 10) + 1,
Math.floor(Math.random() * 10) + 1, Math.floor(Math.random() * 10) + 1,
Math.floor(Math.random() * 10) + 1];

let fee1 = 0;

for (let i = 0; i < parkingLot.length; i++) {

    document.write("Car " + (i + 1) + " has parked for " + parkingLot[i] + " hours<br>");

    if (parkingLot[i] <= 3) {
        fee1 += 3 * parkingLot[i];
    }
    else if (parkingLot[i] > 3 && parkingLot[i] <= 6) {
        fee1 += 2 * parkingLot[i];
    }
    else {
        fee1 += 1 * parkingLot[i];
    }
}

document.write("Total fee: $" + fee1);

// 10. Library Late Fee System 
// 📌 Problem Statement:
//  A library has 20 borrowers who return books late by 1-15 days.
// 1-5 days late → $2 per day
// 6-10 days late → $3 per day
// 11+ days late → $5 per day
//  The program calculates total late fees collected.

document.write("<h1>Library Late Fee System</h1>");

let lateFee = 0;

let books = [Math.floor(Math.random() * 15) + 1, Math.floor(Math.random() * 15) + 1,
Math.floor(Math.random() * 15) + 1, Math.floor(Math.random() * 15) + 1,
Math.floor(Math.random() * 15) + 1, Math.floor(Math.random() * 15) + 1,
Math.floor(Math.random() * 15) + 1, Math.floor(Math.random() * 15) + 1,
Math.floor(Math.random() * 15) + 1, Math.floor(Math.random() * 15) + 1,
Math.floor(Math.random() * 15) + 1, Math.floor(Math.random() * 15) + 1,
Math.floor(Math.random() * 15) + 1, Math.floor(Math.random() * 15) + 1,
Math.floor(Math.random() * 15) + 1, Math.floor(Math.random() * 15) + 1,
Math.floor(Math.random() * 15) + 1, Math.floor(Math.random() * 15) + 1,
Math.floor(Math.random() * 15) + 1, Math.floor(Math.random() * 15) + 1,
];

for (let i = 0; i < books.length; i++) {

    document.write("Book " + (i + 1) + " has " + books[i] + " days late.<br>");

    if (books[i] >= 1 && books[i] <= 5) {
        lateFee += 2 * books[i];
    }
    else if (books[i] > 5 && books[i] <= 10) {
        lateFee += 3 * books[i];
    }
    else {
        lateFee += 5 * books[i];
    }
}

document.write("Total late fee: $" + lateFee);

// 11. Gas Station Fuel Dispenser ⛽💰
// 📌 Problem Statement:
//  A gas station serves 10 cars, each requesting a random amount of fuel (5-50 liters).
// Up to 20 liters → $1.2 per liter
// 21-35 liters → $1.0 per liter
// 36+ liters → $0.8 per liter
//  The program calculates total revenue from all cars.

document.write("<h1>Gas Station Fuel Dispenser</h1>");

let cars = [
    Math.floor(Math.random() * 46) + 5, Math.floor(Math.random() * 46) + 5,
    Math.floor(Math.random() * 46) + 5, Math.floor(Math.random() * 46) + 5,
    Math.floor(Math.random() * 46) + 5, Math.floor(Math.random() * 46) + 5,
    Math.floor(Math.random() * 46) + 5, Math.floor(Math.random() * 46) + 5,
    Math.floor(Math.random() * 46) + 5, Math.floor(Math.random() * 46) + 5,
];

let total = 0;

for (let i = 0; i < cars.length; i++) {

    document.write("Car " + (i + 1) + " has " + cars[i] + " liters of gas.<br>");

    if (cars[i] <= 20) {
        total += 1.2 * cars[i];
    }
    else if (cars[i] > 20 && cars[i] <= 35) {
        total += 1 * cars[i];
    }
    else {
        total += 0.8 * cars[i];
    }
}

document.write("Total: $" + total);
