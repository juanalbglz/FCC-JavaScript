/*
Title:  Write Arrow Functions with Parameters
URL:    https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/write-arrow-functions-with-parameters
*/

/* Example
  Just like a regular function, you can pass arguments into an arrow function.

  const doubler = (item) => item * 2;
  doubler(4);
  doubler(4) would return the value 8.

  If an arrow function has a single parameter, the parentheses enclosing the parameter may be omitted.

  const doubler = item => item * 2;
  It is possible to pass more than one argument into an arrow function.

  const multiplier = (item, multi) => item * multi;
  multiplier(4, 2);
  multiplier(4, 2) would return the value 8.
*/


/* Exercise*/
  //COMPLETE Rewrite the myConcat function which appends contents of arr2 to arr1 so that the function uses arrow function syntax.
  //[x] You should replace the var keyword.
  //[x] myConcat should be a constant variable (by using const).
  //[x] myConcat should be an arrow function with two parameters
  //[x] myConcat() should return [1, 2, 3, 4, 5].
  //[x] The function keyword should not be used.


/* Initial content
  var myConcat = function(arr1, arr2) {
    return arr1.concat(arr2);
  };

  console.log(myConcat([1, 2], [3, 4, 5]));
*/


/* Solution */
const myConcat = (arr1, arr2) => {return arr1.concat(arr2);};

console.log(myConcat([1, 2], [3, 4, 5]));