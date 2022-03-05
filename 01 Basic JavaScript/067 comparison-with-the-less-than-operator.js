/*
Title:  Comparison with the Less Than Operator
URL:    https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/comparison-with-the-less-than-operator
*/

/* EXAMPLE

The less than operator (<) compares the values of two numbers. If the number to the left is less than the number to the right, it returns true. Otherwise, it returns false. Like the equality operator, the less than operator converts data types while comparing.

Examples

  2   < 5 // true
  '3' < 7 // true
  5   < 5 // false
  3   < 2 // false
  '8' < 4 // false

*/

/* Exercise*/
//COMPLETE Add the less than operator to the indicated lines so that the return statements make sense.

//[x] testLessThan(0) should return the string Under 25
//[x] testLessThan(24) should return the string Under 25
//[x] testLessThan(25) should return the string Under 55
//[x] testLessThan(54) should return the string Under 55
//[x] testLessThan(55) should return the string 55 or Over
//[x] testLessThan(99) should return the string 55 or Over
//[x] You should use the < operator at least twice


/* Initial content
function testLessThan(val) {
  if (val) {  // Change this line
    return "Under 25";
  }

  if (val) {  // Change this line
    return "Under 55";
  }

  return "55 or Over";
}

testLessThan(10);
*/

/* Solution */
function testLessThan(val) {
  if (val < 25) {  // Change this line
    return "Under 25";
  }

  if (val < 55) {  // Change this line
    return "Under 55";
  }

  return "55 or Over";
}

testLessThan(10);