var x = 10; // x == 10
var y = 7;  // y == 7

var z = x + y; // z == x + y == 10 + 7 == 17
x = x + z; // x == 27


var big = Math.max(10, 1247214);


var paul = "Paul";
paul = paul + " " + "Pottery";
console.log(paul);


var name = prompt("What's your name?");
var letter = "Hallo, ";
letter += name + "\n\n";
// letter = letter +  name + "\n\n";
letter += "How are you?\n\n";
letter += "Best, \n"
letter += "  Your Computer!";
alert(letter);


var theNumber = Number(prompt("Pick a number", ""));
if (!isNaN(theNumber))
  alert("Your number is the square root of " +
        theNumber * theNumber);


var num = Math.min(141, 5323532);
if (num < 10)
  alert("Small");
else if (num < 100)
  alert("Medium");
else
  alert("Large");


// Write a program that counts from 12 down to 0, e.g. 12, 10, 8, ..., 0.


for (var i = 0; i < 10; i++) {
  console.log(i);
}


for (var i = Number(prompt("Start?", "0")); i < 10; i++) {
  console.log(i);
}


// magic ...
window["var" + i] = 10;


// average of the numbers from 0 to 20







