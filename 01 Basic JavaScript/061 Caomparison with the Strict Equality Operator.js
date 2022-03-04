/*
Title:  Comparison with the Strict Equality Operator
URL:    https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/comparison-with-the-strict-equality-operator
*/

/* EXAMPLE

Strict equality (===) is the counterpart to the equality operator (==). However, unlike the equality operator, which attempts to convert both values being compared to a common type, the strict equality operator does not perform a type conversion.

If the values being compared have different types, they are considered unequal, and the strict equality operator will return false.

Examples

3 ===  3  // true
3 === '3' // false
In the second example, 3 is a Number type and '3' is a String type.

*/

/* Exercise*/
//COMPLETE Use the strict equality operator in the if statement so the function will return the string Equal when val is strictly equal to 7.

//[x] testStrict(10) should return the string Not Equal
//[x] testStrict(7) should return the string Equal
//[x] testStrict("7") should return the string Not Equal
//[x] You should use the === operator


/* Initial content
// Setup
function testStrict(val) {
  if (val) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

testStrict(10);
*/


/* Solution */
// Setup
function testStrict(val) {
  if (val === 7) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

testStrict(10);