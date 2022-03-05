/*
Title:  Comparisons with the Logical OR Operator
URL:    https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/comparisons-with-the-logical-or-operator
*/

/* EXAMPLE

The logical or operator (||) returns true if either of the operands is true. Otherwise, it returns false.

The logical or operator is composed of two pipe symbols: (||). This can typically be found between your Backspace and Enter keys.

The pattern below should look familiar from prior waypoints:

  if (num > 10) {
    return "No";
  }
  if (num < 5) {
    return "No";
  }
  return "Yes";

will return Yes only if num is between 5 and 10 (5 and 10 included). The same logic can be written as:

  if (num > 10 || num < 5) {
    return "No";
  }
  return "Yes";

*/

/* Exercise*/
//COMPLETE Combine the two if statements into one statement which returns the string Outside if val is not between 10 and 20, inclusive. Otherwise, return the string Inside.

//[x] You should use the || operator once
//[x] You should only have one if statement
//[x] testLogicalOr(0) should return the string Outside
//[x] testLogicalOr(9) should return the string Outside
//[x] testLogicalOr(10) should return the string Inside
//[x] testLogicalOr(15) should return the string Inside
//[x] testLogicalOr(19) should return the string Inside
//[x] testLogicalOr(20) should return the string Inside
//[x] testLogicalOr(21) should return the string Outside
//[x] testLogicalOr(25) should return the string Outside

/* Initial content
function testLogicalOr(val) {
  // Only change code below this line

  if (val) {
    return "Outside";
  }

  if (val) {
    return "Outside";
  }

  // Only change code above this line
  return "Inside";
}

testLogicalOr(15);
*/

/* Solution */
function testLogicalOr(val) {
  // Only change code below this line

  if (val < 10 || val > 20) {
    return "Outside";
  }
  // Only change code above this line
  return "Inside";
}

testLogicalOr(15);