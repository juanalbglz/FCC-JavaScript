/*
Title:  Comparison with the Less Than Or Equal To Operator
URL:    https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/comparison-with-the-less-than-or-equal-to-operator
*/

/* EXAMPLE

The less than or equal to operator (<=) compares the values of two numbers. If the number to the left is less than or equal to the number to the right, it returns true. If the number on the left is greater than the number on the right, it returns false. Like the equality operator, the less than or equal to operator converts data types.

Examples

  4   <= 5 // true
  '7' <= 7 // true
  5   <= 5 // true
  3   <= 2 // false
  '8' <= 4 // false

*/

/* Exercise*/
//COMPLETE Add the less than or equal to operator to the indicated lines so that the return statements make sense.

//[x] testLessOrEqual(0) should return the string Smaller Than or Equal to 12
//[x] testLessOrEqual(11) should return the string Smaller Than or Equal to 12
//[x] testLessOrEqual(12) should return the string Smaller Than or Equal to 12
//[x] testLessOrEqual(23) should return the string Smaller Than or Equal to 24
//[x] testLessOrEqual(24) should return the string Smaller Than or Equal to 24
//[x] testLessOrEqual(25) should return the string More Than 24
//[x] testLessOrEqual(55) should return the string More Than 24
//[x] You should use the <= operator at least twice

/* Initial content
function testLessOrEqual(val) {
  if (val) {  // Change this line
    return "Smaller Than or Equal to 12";
  }

  if (val) {  // Change this line
    return "Smaller Than or Equal to 24";
  }

  return "More Than 24";
}

testLessOrEqual(10);
*/

/* Solution */
function testLessOrEqual(val) {
  if (val <= 12) {  // Change this line
    return "Smaller Than or Equal to 12";
  }

  if (val <= 24) {  // Change this line
    return "Smaller Than or Equal to 24";
  }

  return "More Than 24";
}

testLessOrEqual(10);