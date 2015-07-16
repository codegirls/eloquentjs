---
title: Transcript from session #5
---

# Transcript from session #5

## Nested scope

An additional example, I think.

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

## The call stack

	top
	  chicken
	    egg
	      chicken
	        egg
	          chicken
	          ...

As it turns out, even computers can't decide whether the
chicken or the egg comes first...

## Optional arguments

Another example using optional arguments.  `greet` will return
a string containing a greeting for a person.  Usually it will
greet with `"Hi"`, but if you want a different greeting you can
pass it as the second argument.

	function greet(name, greeting) {
	    if (greeting == undefined) {
	      greeting = "Hi";
	
	     }
	
	
	    return greeting + " " + name;
	
	}
	
	console.log(greet("Hannelore")); // -> "Hi Hannelore"
	console.log(greet("Hannelore", "Bonjour")); // -> "Bonjour Hannelore"

## Closure

Here's a more useful example that demonstrates using closures:
`newCounter` creates a new counter, which is a function that has
a reference to the local variable `count`.  When the counter
function is called, it increments the `count` variable and
returns the new value.

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

Note that `counter1` and `counter2` have *different* values
for their `count` variables.  That's because `count` is a
local variable, and only visible to the function call it was
created in and everything inside that function call,such as
the `increment` function that is returned from `newCounter`.

## Homework solutions

These are the solutions for the homework from last time.

	var dingDing = function(x) {
	    var result = "";
	    for (var count = 0; count < x; count++) {
	      result += "ding";  result += "!"
	    }
	    return result;   
	    };
	    console.log(dingDing(5));
	
	
	// squareAndAddTwenty_direct -- doing it directly
	function square(x) { 
	    var result = x * x;  
	    result = result + 20; 
	    return result}; 
	console.log(squareAndAddTwenty_direct(5));
	
	// squareAndAddTwenty_functions -- using utility functions
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
	console.log(squareAndAddTwenty_functions(5)) // (1) call squareAndAddTwenty with the argument 5


## Homework

Homework/reading assignment for next time.  Write us if you're stuck or
want feedback.

For next time, read the remaining sections on the `findSolution` function
and the cow function.  Next time we'll talk about any questions regarding
these two and then go through the exercises for the chapter.
