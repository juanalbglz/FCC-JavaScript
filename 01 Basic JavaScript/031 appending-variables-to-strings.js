/*
Title:  Appending Variables to Strings
URL:    https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/appending-variables-to-strings
*/

/* Example
Just as we can build a string over multiple lines out of string literals, we can also append variables to a string using the plus equals (+=) operator.

Example:

  const anAdjective = "awesome!";
  let ourStr = "freeCodeCamp is ";
  ourStr += anAdjective;
ourStr would have the value freeCodeCamp is awesome!.
*/



/* Exercise*/
//COMPLETE Set someAdjective to a string of at least 3 characters and append it to myStr using the += operator.

//[x] someAdjective should be set to a string at least 3 characters long.

//[x] You should append someAdjective to myStr using the += operator.

/* Initial content
// Change code below this line
const someAdjective = "";
let myStr = "Learning to code is ";
*/


/* Solution */
// Change code below this line
const someAdjective = "awesome";
let myStr = "Learning to code is ";
myStr += someAdjective;