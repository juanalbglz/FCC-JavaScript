/*
Title:  Comparisons with the Logical And Operator
URL:    https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/comparisons-with-the-logical-and-operator
*/

/* EXAMPLE

Sometimes you will need to test more than one thing at a time. The logical and operator (&&) returns true if and only if the operands to the left and right of it are true.

The same effect could be achieved by nesting an if statement inside another if:

  if (num > 5) {
    if (num < 10) {
      return "Yes";
    }
  }
  return "No";

  will only return Yes if num is greater than 5 and less than 10. The same logic can be written as:

  if (num > 5 && num < 10) {
    return "Yes";
  }
  return "No";

*/

/* Exercise*/
//COMPLETE Replace the two if statements with one statement, using the && operator, which will return the string Yes if val is less than or equal to 50 and greater than or equal to 25. Otherwise, will return the string No.

//[x] You should use the && operator once
//[x] You should only have one if statement
//[x] testLogicalAnd(0) should return the string No
//[x] testLogicalAnd(24) should return the string No
//[x] testLogicalAnd(25) should return the string Yes
//[x] testLogicalAnd(30) should return the string Yes
//[x] testLogicalAnd(50) should return the string Yes
//[x] testLogicalAnd(51) should return the string No
//[x] testLogicalAnd(75) should return the string No
//[x] testLogicalAnd(80) should return the string No

/* Initial content
function testLogicalAnd(val) {
  // Only change code below this line

  if (val) {
    if (val) {
      return "Yes";
    }
  }

  // Only change code above this line
  return "No";
}

testLogicalAnd(10);
*/

/* Solution */
function testLogicalAnd(val) {
  // Only change code below this line

  if (val <= 50 && val >= 25) {
    return "Yes";
  }
  // Only change code above this line
  return "No";
}

testLogicalAnd(10);