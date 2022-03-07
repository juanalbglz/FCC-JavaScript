/*
Title:  Returning Early Pattern for Functions
URL:    https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/return-early-pattern-for-functions
*/

/* EXAMPLE

When a return statement is reached, the execution of the current function stops and control returns to the calling location.

Example

function myFun() {
  console.log("Hello");
  return "World";
  console.log("byebye")
}
myFun();
The above will display the string Hello in the console, and return the string World. The string byebye will never display in the console, because the function exits at the return statement.

*/

/* EXERCISE

Modify the function abTest so that if a or b are less than 0 the function will immediately exit with a value of undefined.

Hint
Remember that undefined is a keyword, not a string.

*/

//[x] abTest(2, 2) should return a number
//[x] abTest(2, 2) should return 8
//[x] abTest(-2, 2) should return undefined
//[x] abTest(2, -2) should return undefined
//[x] abTest(2, 8) should return 18
//[x] abTest(3, 3) should return 12
//[x] abTest(0, 0) should return 0


/* Initial content
// Setup
function abTest(a, b) {
  // Only change code below this line



  // Only change code above this line

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

abTest(2,2);
*/

/* Solution */
// Setup
function abTest(a, b) {
  // Only change code below this line
  if (a < 0 || b < 0){
    return
  }


  // Only change code above this line

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

abTest(2,2);