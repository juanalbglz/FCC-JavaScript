/*
Title:  Global vs. Local Scope in Functions
URL:    https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/understanding-undefined-value-returned-from-a-function
*/

/* EXAMPLE

A function can include the return statement but it does not have to. In the case that the function doesn't have a return statement, when you call it, the function processes the inner code but the returned value is undefined.

Example

  let sum = 0;

  function addSum(num) {
    sum = sum + num;
  }

  addSum(3);
addSum is a function without a return statement. The function will change the global sum variable but the returned value of the function is undefined.

*/

/* Exercise*/
//COMPLETE Create a function addFive without any arguments. This function adds 5 to the sum variable, but its returned value is undefined.


//[x] addFive should be a function.
//[x] Once both functions have run, the sum should be equal to 8.
//[x] Returned value from addFive should be undefined.
//[x] Inside the addFive function, you should add 5 to the sum variable.

/* Initial content
  // Setup
  let sum = 0;

  function addThree() {
    sum = sum + 3;
  }

  // Only change code below this line


  // Only change code above this line

  addThree();
  addFive();
*/


/* Solution */
// Setup
let sum = 0;

function addThree() {
  sum = sum + 3;
}

// Only change code below this line
function addFive(){
  sum += 5;
}

// Only change code above this line

addThree();
addFive();