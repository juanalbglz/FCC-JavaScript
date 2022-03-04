/*
Title:  Comparison with the Grater Than Operator
URL:    https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/comparison-with-the-greater-than-operator
*/

/* EXAMPLE

The greater than operator (>) compares the values of two numbers. If the number to the left is greater than the number to the right, it returns true. Otherwise, it returns false.

Like the equality operator, the greater than operator will convert data types of values while comparing.

Examples

  5   >  3  // true
  7   > '3' // true
  2   >  3  // false
  '1' >  9  // false

*/

/* Exercise*/
//COMPLETE Add the greater than operator to the indicated lines so that the return statements make sense.

//[x] testGreaterThan(0) should return the string 10 or Under
//[x] testGreaterThan(10) should return the string 10 or Under
//[x] testGreaterThan(11) should return the string Over 10
//[x] testGreaterThan(99) should return the string Over 10
//[x] testGreaterThan(100) should return the string Over 10
//[x] testGreaterThan(101) should return the string Over 100
//[x] testGreaterThan(150) should return the string Over 100
//[x] You should use the > operator at least twice


/* Initial content
function testGreaterThan(val) {
  if (val) {  // Change this line
    return "Over 100";
  }

  if (val) {  // Change this line
    return "Over 10";
  }

  return "10 or Under";
}

testGreaterThan(10);
*/


/* Solution */
function testGreaterThan(val) {
  if (val > 100) {  // Change this line
    return "Over 100";
  }

  if (val > 10) {  // Change this line
    return "Over 10";
  }

  return "10 or Under";
}

testGreaterThan(10);