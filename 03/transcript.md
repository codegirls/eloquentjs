---
title: eloquent.js book club - transcript from session #3
---

# eloquent.js book club - transcript from session #3

## Solving the chessboard exercise

First, printing a single line, consisting of the same character:

    var line = "";
    for (var i = 0; i < 8; i++) {
      line += "#";
    }
    console.log(line)

Then we needed to know how to print a different character at the
"odd" positions.  To check for that, we see if the current position
(`i`), is divisible by to, e.g. if `i % 2 == 0` is true.

```
var line = "";
for (var i = 0; i < 8; i++) {
  if (i % 2 == 0) {
    line += "#";
  } else {
    line += " ";
  }
}
console.log(line)
```

Note that we can write this shorter, using the conditional operator (`?:`):

```
var line = "";
for (var i = 0; i < 8; i++) {
  line += i % 2 == 0 ? "#" : " ";
}
console.log(line)
```

Following that, we added a second loop to print a board:

```
for (var n = 0; n < 8; i++) {
  var line = "";
  for (var i = 0; i < 8; i++) {
    line += i % 2 == 0 ? "#" : " ";
  }
  console.log(line)
}
```

However, that's always the same line, which is not quite a chessboard.
Using the same trick that we used before, we check if our (line)
position is divisble by two, i.e. if `n % 2 == 0` is true, and
add a single space in front of the odd lines so they are offset.

```
for (var n = 0; n < 8; i++) {
  var line = "";
  for (var i = 0; i < 8; i++) {
    line += i % 2 == 0 ? "#" : " ";
  }
  if (n % 2 != 0 {
    line = " " + line;
  }
  console.log(line)
}
```

We could write this shorter as well, again using the conditional
operator.

You can implement this in all sorts of ways, for example, maybe
you want to collect the chessboard pattern in a single string
and only print it out in the end?  We did that, using the string
`"\n"` to insert line breaks (also called newlines).

```
var chessboard = "";
for (var n = 0; n < 8; i++) {
  var line = "";
  for (var i = 0; i < 8; i++) {
    line += i % 2 == 0 ? "#" : " ";
  }
  if (n % 2 != 0 {
    line = " " + line;
  }
  chessboard += line + "\n"
}
console.log(chessboard);
```

Please send us different solutions, as there are always different
ways of solving problems!  You can also write us at `info@codegirls.de`
to get feedback on your solutions or ask us questions in general.

## Random

- [Code golfing](https://en.wikipedia.org/wiki/Code_golf), making
    programs absurdly short, but also unreadable most times.

    Related: [140byt.es](http://www.140byt.es/), tweetable JavaScript
    programs that might even do useful things.
- somewhat related to using `let` instead of `var`, a list of
    new features in es6 (a new version of javascript, some of
    these things already work in browsers, some don't):
    <https://github.com/lukehoban/es6features>
