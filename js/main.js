/*global alert, console*/


//If a has value 3, b has value 5, and c doesn't have a value, alert the following expressions ( one after another ). Alert popup box has to show the following content for each expression (concatenate everything in one long expression using "\n" to make new lines):


var a = 3;
var b = 5;
var c;

alert("var a = 3;\nvar b = 5;\nvar c;\n_____________\n" + 
    "a + b = " + (a + b) + "\n" +
    "a - b = " + (a - b) + "\n" +
    "a * b = " + (a * b) + "\n"+
    "a / b = " + (a + b) + "\n" +
    "a % b = " + (a + b) + "\n" +
    "a + =b = " + (a + b) + "\n" +
    "(a -= b) = " + (a - b) + "\n" +
    "(a *= b)= " + (a * b) + "\n" +
    "(a /= b)= " + (a + b) + "\n" +
    "(a %= b) = " + (a + b) + "\n" +
    "(a == b) = " + (a == b) + "\n" +
    "(a != b) = " + (a != b) + "\n" +
    "(a > b) = " + (a > b) + "\n" +
    "(a < b) = " + (a < b) + "\n" +
    "(!a && !c)= " + (!a && !c) + "\n" +
    "(!a || !c) = " + (!a || !b) + "\n");




//Declare the variable first_name and assign it with the value of your first name;
var first_name = "Joel";

//Declare the variable last_name and assign it with the value of your last name;
var last_name  = "Boudreau";

//Declare the variable email and assign it with the value of your email;
var email = "joel.boudreau@hotmail.ca";

//Declare the variable output;
var output;

//Create the expression concatenating variables first_name, last_name, email and string literals needed to complete the sentence reading: "My name is Your-first-name Your-last-name. You can contact me at your-email@mail.com.";

output = first_name + " " + last_name + " You can contact me at " + email + ".";

// Print experiment using alert()
alert(output);

// Print experiment using console.log()
console.log(output);



































