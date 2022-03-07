/*
Title:  Use the parseInt function
URL:    https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/use-the-parseint-function
*/

/* Example
  The parseInt() function parses a string and returns an integer. Here's an example:

  const a = parseInt("007");
  The above function converts the string 007 to the integer 7. If the first character in the string can't be converted into a number, then it returns NaN.
*/


/* Exercise*/
  //COMPLETE Use parseInt() in the convertToInteger function so it converts the input string str into an integer, and returns it.
  //[x] convertToInteger should use the parseInt() function
  //[x] convertToInteger("56") should return a number
  //[x] convertToInteger("56") should return 56
  //[x] convertToInteger("77") should return 77
  //[x] convertToInteger("JamesBond") should return NaN

/* Initial content
  function convertToInteger(str) {

  }

  convertToInteger("56");
*/


/* Solution */
function convertToInteger(str) {
  return parseInt(str);
}

convertToInteger("56");