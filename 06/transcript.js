 // You can find the transcript of the previous session here: http://codegirls.de/eloquentjs/05/transcript.html

// Exercise: Bean counting - http://eloquentjavascript.net/03_functions.html#h_3rsiDgC2do

var exampleWord = "Peter Pan";
console.log(exampleWord.charAt(0));
console.log(exampleWord.charAt(1));
console.log(exampleWord.charAt(2));
console.log(exampleWord.charAt(8));

console.log(exampleWord.length);

function countBs(word) {
    var count = 0;
    for (var i = 0; i < word.length; i += 1) {
        // console.log(word.charAt(i));
        if (word.charAt(i) == "B")
        count += 1; 
    }
    return count;
}
console.log(countBs("Peter B. Pan"))
//-> 1


function countChar(word) {
    var count = 0;
    for (var i = 0; i < word.length; i += 1) {
        // console.log(word.charAt(i));
        if (word.charAt(i) == "B")
        count += 1; 
    }
    return count;
}

console.log(countBs("BBC"));
//-> 2


// printChars("Peter Pan");

function countBs(word) {
    // walk through word (by "counting" up to the length of word)
    // for each character, check if it is a b
    // if it is, count up
    // return how many Bs we saw
}

// Exercise: Recursion - http://eloquentjavascript.net/03_functions.html#h_jxl1p970Fy

function isEven(x) {
    if (x < 0) {
        x = -x; // dreht das Vorzeichen um
        // x = Math.abs(x); // das hier auch (abs = "absolut")
    }
    
    if (x == 0)
      return true;
    else if (x == 1)
      return false;
    else
      return isEven(x - 2);
}
console.log(isEven(10))
//-> true

function isOdd(x) {  
        if (x < 0) {
        x = -x; // dreht das Vorzeichen um
        // x = Math.abs(x); // das hier auch (abs = "absolut")
    }
        if (x == 0)     
         return false;    
         else if (x == 1)      
         return true;    
         else     
          return isOdd(x - 2);
     }
          console.log(isOdd(10))
         //-> False


//-> kürzer:
function isOdd(x) {
    return !isEven(x);
}


// "Cheating" :)

function isEven(number) {
  if (number%2 == 0) {
    return true;
  }
  else {
    return false;
  }
}

function isEven(number) {
    return number % 2 == 0;
}

// similar to http://eloquentjavascript.net/03_functions.html#h_jxl1p970Fy
// (i.e. take another look at the power function, maybe it inspires you ...)

// Exercise: Minimum - http://eloquentjavascript.net/03_functions.html#h_XTmO7z7MPq

function min (x,y) { 
     if (x < y)   
     return x;  
           
     if (x > y)  
     return y;   
       
     if (x == y)  
     return("beide gleich groß");  
     }
     
     console.log(min(10, 10))
     console.log(min(-2, 0))

function min(x, y) {
  if (x < y)
    return x;
  else
    return y;
}

function min(x, y) {
    return x < y ? x : y;
}


console.log(Math.min(1,2,3,4,5))
//--> 1

function isEven(no){
  while(no >= 2){
    no = no-2;    
  }
  if(no == 1){
    result = false;
  }
  else if(no == 0){
    result = true;
  }
  
  return result;
}

