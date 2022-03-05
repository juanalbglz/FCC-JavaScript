/*
Title:  Use the parseInt Function with a Radix
URL:    https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/use-the-parseint-function-with-a-radix
*/

/* Example
  The parseInt() function parses a string and returns an integer. It takes a second argument for the radix, which specifies the base of the number in the string. The radix can be an integer between 2 and 36.

  The function call looks like:

    parseInt(string, radix);  
  And here's an example:

    const a = parseInt("11", 2);
  The radix variable says that 11 is in the binary system, or base 2. This example converts the string 11 to an integer 3.
*/


/* Exercise*/
  //COMPLETE Use parseInt() in the convertToInteger function so it converts a binary number to an integer and returns it.
  //[x] convertToInteger should use the parseInt() function
  //[x] convertToInteger("10011") should return a number
  //[x] convertToInteger("10011") should return 19
  //[x] convertToInteger("111001") should return 57
  //[x] convertToInteger("JamesBond") should return NaN


/* Initial content
  function convertToInteger(str) {

  }

  convertToInteger("10011");
*/


/* Solution */
function convertToInteger(str) {
  return parseInt(str, 2)
}

convertToInteger("10011");