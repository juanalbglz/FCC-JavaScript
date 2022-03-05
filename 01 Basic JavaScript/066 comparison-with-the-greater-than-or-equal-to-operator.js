/*
Title:  Comparison with the Grater Than Or Equel To Operator
URL:    https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/comparison-with-the-greater-than-or-equal-to-operator
*/

/* EXAMPLE

The greater than or equal to operator (>=) compares the values of two numbers. If the number to the left is greater than or equal to the number to the right, it returns true. Otherwise, it returns false.

Like the equality operator, the greater than or equal to operator will convert data types while comparing.

Examples

  6   >=  6  // true
  7   >= '3' // true
  2   >=  3  // false
  '7' >=  9  // false

*/

/* Exercise*/
//COMPLETE Add the greater than or equal to operator to the indicated lines so that the return statements make sense.

//[x] testGreaterOrEqual(0) should return the string Less than 10
//[x] testGreaterOrEqual(9) should return the string Less than 10
//[x] testGreaterOrEqual(10) should return the string 10 or Over
//[x] testGreaterOrEqual(11) should return the string 10 or Over
//[x] testGreaterOrEqual(19) should return the string 10 or Over
//[x] testGreaterOrEqual(100) should return the string 20 or Over
//[x] testGreaterOrEqual(21) should return the string 20 or Over
//[x] You should use the >= operator at least twice


/* Initial content
function testGreaterOrEqual(val) {
  if (val) {  // Change this line
    return "20 or Over";
  }

  if (val) {  // Change this line
    return "10 or Over";
  }

  return "Less than 10";
}

testGreaterOrEqual(10);
*/


/* Solution */
function testGreaterOrEqual(val) {
  if (val >= 20) {  // Change this line
    return "20 or Over";
  }

  if (val >= 10) {  // Change this line
    return "10 or Over";
  }

  return "Less than 10";
}

testGreaterOrEqual(10);