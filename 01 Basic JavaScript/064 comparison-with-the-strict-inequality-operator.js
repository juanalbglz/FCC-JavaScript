/*
Title:  Comparison with the Strict Inequality Operator
URL:    https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/comparison-with-the-strict-inequality-operator
*/

/* EXAMPLE

The strict inequality operator (!==) is the logical opposite of the strict equality operator. It means "Strictly Not Equal" and returns false where strict equality would return true and vice versa. The strict inequality operator will not convert data types.

Examples

  3 !==  3  // false
  3 !== '3' // true
  4 !==  3  // true

*/

/* Exercise*/
//COMPLETE Add the strict inequality operator to the if statement so the function will return the string Not Equal when val is not strictly equal to 17

//[x] testStrictNotEqual(17) should return the string Equal
//[x] testStrictNotEqual("17") should return the string Not Equal
//[x] testStrictNotEqual(12) should return the string Not Equal
//[x] testStrictNotEqual("bob") should return the string Not Equal
//[x] You should use the !== operator


/* Initial content
// Setup
function testStrictNotEqual(val) {
  if (val) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testStrictNotEqual(10);
*/


/* Solution */
// Setup
function testStrictNotEqual(val) {
  if (val !== 17) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testStrictNotEqual(10);