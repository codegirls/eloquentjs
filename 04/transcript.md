# Transcript from session #4

## Defining functions

> A function is like a box, arguments go in if there is a `return`,
> then something goes out as well otherwise, nothing `undefined`
> comes out.

	var square = function(x) {
	  return x * x;
	};
	
	console.log(square(12));
	
	square = function(x) {
	    return x * x * x;
	}
	
	var result = 10 * 10;
	var result = square(10);

### Some more exercises

Write functions `square`, `addTwenty` and `greet` such that the
following expressions all evaluate to `true`.

	square(10) == 100 // we already have this one
	
	addTwenty(17) == 37
	
	greet("Lucas") == "Hi, Lucas"

About return values, we could write a function similar to `greet`
that doesn't return anything.  However, than we can't use it's
return value.

Here's that variant of `greet`:

	var greetDings = function(name) {
	    greetDings(name);
	}
	
	// console.log vs return
	var greetAndPrint = function(name) {
	    console.log("Hi, " + name);
	}
	console.log(greetAndPrint("Bea"));
	// -> undefined

The following demonstrates what "using the return value" means.

    // Define `greet` again, just to be sure what it is.
	var greet = function(x) {
	  return "Hi, " + x
	};
      
	var firstGreeting = greet("Dietmar");
	var secondGreeting = greet("Hannelore");
	var bothGreeting = secondGreeting + " and " + firstGreeting;
	console.log(bothGreeting);
	// -> "Hi, Hannelore and Hi, Dietmar"

We can store the return the value returned by `greet("Hannelore")`
and greet two people, for example.

## Parameters and scopes

	var x = "outside";         // x is a global variable
	
	var f1 = function() {
	  console.log(x);          // -> "outside"
	  var x = "inside f1";     // x is a local variable
	  console.log(x);          // -> "inside f1"
	};
	
	console.log(x);            // -> "outside"
	f1();
	console.log(x);            // -> "outside"

## Nested scope

This is the `landscape` function from the book, with comments we added
as we went through it.  (Start with the call to `landscape` in the
last line, and then "play computer" to see how the function builds
the "landscape".)

	var landscape = function(x, y, z, w, u) {                         // (2) now we're executing landscape(), it doesn't have arguments
	                                                                  //   x, y and z have values, w and u are undefined
	  var result = "";                                                // (3) we define a local variable `result`
	  var flat = function(size) {                                     // (4) we assign the function to the (new, local) variable `flat`
	    for (var count = 0; count < size; count++)
	      result += "_";                                              // (5) this is the same variable as outside! (in the landscape function)
	  };
	  var mountain = function(size) {
	    result += "/";                                                // !
	    for (var count = 0; count < size; count++)
	      result += "'";                                              // !
	    result += "\\";                                               // !
	  };
	
	                                                                    // result == ""
	  flat(3);
	                                                                  // result == "___"
	  mountain(4);
	                                                                  // result == "___/''''\\"
	  flat(6);
	  mountain(1);
	  flat(1);
	                                                                  // result == "___/''''\\______/'\\_"
	  return result;
	};
	console.log(landscape("pretty", "very pretty", "ponies"));             // (1) Start here, call landscape()
	// -> ___/''''\______/'\_
	

## Other stuff

### Homework

`dingDing`:
	
	// Homework?  dingDing(5) == "dingdingdingdingding"
	//   (maybe be inspired the "power" function, you also need a loop)
	//   check with console.log(dingDing(5) == "dingdingdingdingding")
	//                -> true

Combining functions:

	// Homework: write the function squareAndAddTwenty: squareAndAddTwenty(5) == 45
	//  (using the functions square and addTwenty)
	

### Some solutions

    var greet = function(x) {
        return "Hi, " + x
    };
    console.log(greet("Lucas"));

    var addTwenty = function(x) {
        return x + 20;
    };
    console.log(addTwenty(17));

    var greet = function(name) { 
    console.log("Hi"+ name) };
    greet("  Lucas");
    greet("Lucas") == "Hi, Lucas"
