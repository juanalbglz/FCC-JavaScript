/*
Title:  Comparison with the Inequality Operator
URL:    https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/comparison-with-the-inequality-operator
*/

/* EXAMPLE

The inequality operator (!=) is the opposite of the equality operator. It means not equal and returns false where equality would return true and vice versa. Like the equality operator, the inequality operator will convert data types of values while comparing.

Examples

  1 !=  2    // true
  1 != "1"   // false
  1 != '1'   // false
  1 != true  // false
  0 != false // false

*/

/* Exercise*/
//COMPLETE Add the inequality operator != in the if statement so that the function will return the string Not Equal when val is not equivalent to 99.

//[x] testNotEqual(99) should return the string Equal
//[x] testNotEqual("99") should return the string Equal
//[x] testNotEqual(12) should return the string Not Equal
//[x] testNotEqual("12") should return the string Not Equal
//[x] testNotEqual("bob") should return the string Not Equal
//[x] You should use the != operator

/* Initial content
// Setup
function testNotEqual(val) {
  if (val) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testNotEqual(10);
*/


/* Solution */
// Setup
function testNotEqual(val) {
  if (val != 99) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testNotEqual(10);