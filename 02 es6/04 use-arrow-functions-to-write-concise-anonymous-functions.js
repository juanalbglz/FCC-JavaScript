/*
Title:  Use Arrow Functions to Write Concise Anonymous Functions
URL:    https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/use-arrow-functions-to-write-concise-anonymous-functions
*/

/* Example
  In JavaScript, we often don't need to name our functions, especially when passing a function as an argument to another function. Instead, we create inline functions. We don't need to name these functions because we do not reuse them anywhere else.

  To achieve this, we often use the following syntax:

  const myFunc = function() {
    const myVar = "value";
    return myVar;
  }
  ES6 provides us with the syntactic sugar to not have to write anonymous functions this way. Instead, you can use arrow function syntax:

  const myFunc = () => {
    const myVar = "value";
    return myVar;
  }
  When there is no function body, and only a return value, arrow function syntax allows you to omit the keyword return as well as the brackets surrounding the code. This helps simplify smaller functions into one-line statements:

  const myFunc = () => "value";
  This code will still return the string value by default.


*/


/* Exercise*/
  //COMPLETE Rewrite the function assigned to the variable magic which returns a new Date() to use arrow function syntax. Also, make sure nothing is defined using the keyword var.

  //[x] You should replace the var keyword.
  //[x] magic should be a constant variable (by using const).
  //[x] magic should be a function.
  //[x] magic() should return the correct date.
  //[x] The function keyword should not be used.

/* Initial content
  var magic = function() {
    return new Date();
  };
*/


/* Solution */
const magic = () => {return new Date();};

console.log(magic());