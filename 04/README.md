---
title: eloquent.js book club - session #4
permalink: /04/index.html
---

# eloquent.js book club - session #4

([Chapter 3, Functions](http://eloquentjavascript.net/03_functions.html))

We might use a [digital "whiteboard"](http://pad.papill0n.org/p/eloquentjs?noColors=true&useMonospaceFont=true).

There's a [transcript](./transcript.html) of the session.

## Some questions

Let's refresh a few things this chapter uses:

- What does `console.log(false || 3);` print?
- What about `console.log(null || "yay");`?

### Growing functions

- Did you think of a different way to generalize the padding?  Did you expect something else?
- Implement `padWith(padding, value, length)`.

        console.log(padWith(" ", 42, 3))
        // -> " 42"
        console.log(padWith("_", 1, 5))
        // -> "____1"
        console.log(padWith(" ", "Words!, 10))
        // -> "    Words!"
- Mhh... what if you want the padding to be an *optional* argument?  How would that work?

        console.log(pad(42, 3))
        // -> " 42"
        console.log(pad(42, 4, "0"))
        // -> "0042"

    You could even make the `length` argument optional...

### Other things

#### Homework: Greetings

Let's imagine we had a function to greet people:

    greet("Jane");
    // -> "Hi, Jane!"

And maybe we want it to also count how many people it greeted:

    var count = 0;

    greetAndCount("Jane");
    // -> "Hi, Jane!"

    greetAndCount("Alice");
    // -> "Hi, Alice!"

    console.log(count);
    // -> 2

And finally, let's also complain if someone comes in twice in a row:

    greetOnce("Jane");
    // -> "Hi, Jane!"

    greetOnce("Jane");
    // -> "Hey, you just came in, how did you do that?"

    greetOnce("Alice");
    // -> "Hi, Alice!"

    greetOnce("Jane");
    // -> "Hi, Jane!"

How would you implement that?
