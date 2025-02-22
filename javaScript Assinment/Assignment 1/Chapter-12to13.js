// 1. Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter. (Hint: ASCII
// codes:- A=65, Z=90, a=97, z=122).

var input = prompt("Enter any input : ");
if (input >= '0' && input <= '9') {
    alert("You entered a NUMBER.");
} else if (input >= 'A' && input <= 'Z') {
    alert("You entered an UPPERCASE LETTER.");
} else if (input >= 'a' && input <= 'z') {
    alert("You entered a LOWERCASE LETTER.");
} else {
    alert("You entered a special character or symbol.");
}


// 2. Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.

var int1 = prompt("Enter any Number : ");
var int2 = prompt("Enter any Number : ");
if (int1 > int2) {
    alert(int1 + " is greater than "  + int2);
    } else if (int2 > int1) {
        alert(int2 + " is greater than " + int1);
    
    } else if (int1 == int2) {
        alert("Both numbers are equal");
    }
    else{
        alert("Invalid input");
    }

// 3. Write a program that takes input a number from user 
// state whether the number is positive, negative or zero.

var num1 = Number(prompt("Enter a number:"));

if (num1 > 0) {
    alert("The number is POSITIVE.");
} else if (num1 < 0) {
    alert("The number is NEGATIVE.");
} else {
    alert("The number is ZERO.");
}


// 4. Write a program that takes a character (i.e. string of
// length 1) and returns true if it is a vowel, false otherwise

var char1 = prompt("Enter a Single Character") 

if (char1 >= 'a' && char1 <= 'z'){

    if(char1 == 'a' || char1 == 'e' || char1 == 'i' || char1 == 'o' || char1 == 'u'){
        alert("Character is Vowel");
    }
    else{
        alert("Character is Not Vowel");
    }
}
else{
    alert("Not a character")
}
// 5. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are
// same, show message “Correct! The password you
// entered matches the original password”. Show
// “Incorrect password” otherwise.

var storePass = prompt("Enter the Password to store : ");
var userPass = prompt("Please! Enter the Password : ");

if(userPass == ''){
    alert("Please enter your password");
}
else if (userPass === storePass){
    alert("“Correct! The password you entered matches the original password.")
}
else{
    alert("Incorrect Password");
}

// 6. This if/else statement does not work. Try to fix it:

var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";
}
else {
greeting = "Good evening";
}
alert(greeting);

// 7. Write a program that takes time as input from user in 24
// hours clock format like: 1900 = 7pm. Implement the
// following case using if, else & else if statements

var time = Number(prompt("Enter time in 24-hour format (e.g., 1900 for 7 PM):"));

if (time >= 0 && time < 1200) {
    alert("Good Morning!");
} else if (time >= 1200 && time < 1700) {
    alert("Good Afternoon!");
} else if (time >= 1700 && time < 2100) {
    alert("Good Evening!");
} else if (time >= 2100 && time <= 2359) {
    alert("Good Night!");
} else {
    alert("Invalid time! Enter between 0000 and 2359.");
}





