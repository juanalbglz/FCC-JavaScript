/*
Title:  Use Multiple Conditional (Ternary) Operators
URL:    https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/use-multiple-conditional-ternary-operators
*/

/* Example
  In the previous challenge, you used a single conditional operator. You can also chain them together to check for multiple conditions.

  The following function uses if, else if, and else statements to check multiple conditions:

    function findGreaterOrEqual(a, b) {
      if (a === b) {
        return "a and b are equal";
      }
      else if (a > b) {
        return "a is greater";
      }
      else {
        return "b is greater";
      }
    }
  The above function can be re-written using multiple conditional operators:

    function findGreaterOrEqual(a, b) {
      return (a === b) ? "a and b are equal" 
        : (a > b) ? "a is greater" 
        : "b is greater";
    }
  It is considered best practice to format multiple conditional operators such that each condition is on a separate line, as shown above. Using multiple conditional operators without proper indentation may make your code hard to read. For example:

    function findGreaterOrEqual(a, b) {
      return (a === b) ? "a and b are equal" : (a > b) ? "a is greater" : "b is greater";
    }
*/


/* Exercise*/
  //COMPLETE In the checkSign function, use multiple conditional operators - following the recommended format used in findGreaterOrEqual - to check if a number is positive, negative or zero. The function should return positive, negative or zero.
  //[x] checkSign should use multiple conditional operators
  //[x] checkSign(10) should return the string positive. Note that capitalization matters
  //[x] checkSign(-12) should return the string negative. Note that capitalization matters
  //[x] checkSign(0) should return the string zero. Note that capitalization matters

/* Initial content
    function checkSign(num) {

  }

  checkSign(10);
*/


/* Solution */
function checkSign(num) {
  return (num > 0) ? "positive" : (num < 0) ? "negative" : "zero";
}

checkSign(10);