// Homework: findSolution & cow function

// Closure

function newCounter() {      // (2)
    var count = 0;
    var increment = function() {
        count += 1;          // (4) count = count + 1
        return count;
    }
    return increment;
}

var counter1 = newCounter();   // (1)
console.log(counter1());       // (3) -> 1
console.log(counter1());       // (5) -> 2

var counter2 = newCounter();   // (6)
console.log(counter2());       // (7) -> 1

console.log(counter1());       // (8) -> 3

// Optional arguments

function greet(name, greeting) {
    if (greeting == undefined) {
      greeting = "Hi";

     }


    return greeting + " " + name;

}

console.log(greet("Hannelore")); // -> "Hi Hannelore"
console.log(greet("Hannelore", "Bonjour")); // -> "Bonjour Hannelore"

// The call stack

top
  chicken
    egg
      chicken
        egg
          chicken
            ...

// Homework

var dingDing = function(x) {  
    var result = "";  
    for (var count = 0; count < x; count++) {   
      Xresult += "ding";  result += "!"
    }
    return result;   
    };
    console.log(dingDing(5));



function square(x) { 
    var result = x * x;  
    result = result + 20; 
    return result}; 
    console.log(square(5));

function squareAndAddTwenty(x) {                // (2) x = 5
    // can also be defined outside of squareAndAddTwenty
    var square = function(x) {                  // (3) x = 5
        return x * x;                           // (4) 5 * 5 == 25

     }

     // this as well

     var addTwenty = function(x) {               // (5) x = 25

         return x + 20;                          // (6) 25 + 20 == 45

     }

    return addTwenty(square(x));                // (7) return 45
    /*var s = square(x);
    var a = addTwenty(s)
    return a;*/
    //return square(addTwenty(x));  // this returns something else!  step through the program to find out what!
}
console.log(squareAndAddTwenty(5)) // (1) call squareAndAddTwenty with the argument 5

// Nested scope

var count = 0;

var increment = function() {
    count += 1;
}

console.log(count); // 0

increment();
console.log(count); // 1

increment();
increment();
console.log(count); // 3

// wrong `increment`
var increment = function() {
    var count;
    count += 1;
}

// outer counter will always be 0

