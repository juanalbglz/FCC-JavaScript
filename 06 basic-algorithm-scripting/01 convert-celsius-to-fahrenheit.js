/*
  Title:  Convert Celsius to Fahrenheit
  URL:    https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/convert-celsius-to-fahrenheit
*/

/* Example

*/


/* Exercise*/
  //COMPLETE The algorithm to convert from Celsius to Fahrenheit is the temperature in Celsius times 9/5, plus 32. You are given a variable celsius representing a temperature in Celsius. Use the variable fahrenheit already defined and assign it the Fahrenheit temperature equivalent to the given Celsius temperature. Use the algorithm mentioned above to help convert the Celsius temperature to Fahrenheit.

  //[x] convertToF(0) should return a number
  //[x] convertToF(-30) should return a value of -22
  //[x] convertToF(-10) should return a value of 14
  //[x] convertToF(0) should return a value of 32
  //[x] convertToF(20) should return a value of 68
  //[x] convertToF(30) should return a value of 86

/* Initial content
function convertToF(celsius) {
  let fahrenheit;
  return fahrenheit;
}

convertToF(30);
*/


/* Solution */
function convertToF(celsius) {
  let fahrenheit = (9/5*celsius)+32;
  return fahrenheit;
}

convertToF(30);
