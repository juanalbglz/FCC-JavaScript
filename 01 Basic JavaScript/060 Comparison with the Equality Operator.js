/*
Title:  Comparison with the Equality Operator
URL:    https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/comparison-with-the-equality-operator
*/

/* EXAMPLE

There are many comparison operators in JavaScript. All of these operators return a boolean true or false value.
*/
//IMPORTANT The most basic operator is the equality operator ==. The equality operator compares two values and returns true if they're equivalent or false if they are not. Note that equality is different from assignment (=), which assigns the value on the right of the operator to a variable on the left.
/*
  function equalityTest(myVal) {
    if (myVal == 10) {
      return "Equal";
    }
    return "Not Equal";
  }
If myVal is equal to 10, the equality operator returns true, so the code in the curly braces will execute, and the function will return Equal. Otherwise, the function will return Not Equal. In order for JavaScript to compare two different data types (for example, numbers and strings), it must convert one type to another. This is known as Type Coercion. Once it does, however, it can compare terms as follows:

  1   ==  1  // true
  1   ==  2  // false
  1   == '1' // true
  "3" ==  3  // true


*/

/* Exercise*/
//COMPLETE Add the equality operator to the indicated line so that the function will return the string Equal when val is equivalent to 12.

//[x] testEqual(10) should return the string Not Equal
//[x] testEqual(12) should return the string Equal
//[x] testEqual("12") should return the string Equal
//[x] You should use the == operator


/* Initial content
// Setup
function testEqual(val) {
  if (val) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

testEqual(10);
*/


/* Solution */
// Setup
function testEqual(val) {
  if (val == 12) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

testEqual(10);