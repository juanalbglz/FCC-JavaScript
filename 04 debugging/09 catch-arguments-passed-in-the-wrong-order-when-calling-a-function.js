/*
  Title:  Catch Arguments Passed in the Wrong Order When Calling a Function
  URL:    https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/debugging/catch-arguments-passed-in-the-wrong-order-when-calling-a-function
*/

/* Example
  Continuing the discussion on calling functions, the next bug to watch out for is when a function's arguments are supplied in the incorrect order. If the arguments are different types, such as a function expecting an array and an integer, this will likely throw a runtime error. If the arguments are the same type (all integers, for example), then the logic of the code won't make sense. Make sure to supply all required arguments, in the proper order to avoid these issues.
*/


/* Exercise*/
  //COMPLETE The function raiseToPower raises a base to an exponent. Unfortunately, it's not called properly - fix the code so the value of power is the expected 8.

  //[x] Your code should fix the variable power so it equals 2 raised to the 3rd power, not 3 raised to the 2nd power.
  //[x] Your code should use the correct order of the arguments for the raiseToPower function call.



/* Initial content
  function raiseToPower(b, e) {
    return Math.pow(b, e);
  }

  let base = 2;
  let exp = 3;
  let power = raiseToPower(exp, base);
  console.log(power);
*/


/* Solution */
function raiseToPower(b, e) {
  return Math.pow(b, e);
}

let base = 2;
let exp = 3;
let power = raiseToPower(base, exp);
console.log(power);