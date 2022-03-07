/*
Title:  Concatenating Strings with Plus Equals Operator
URL:    https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/concatenating-strings-with-the-plus-equals-operator
*/

/* Example
We can also use the += operator to concatenate a string onto the end of an existing string variable. This can be very helpful to break a long string over several lines.

Note: Watch out for spaces. Concatenation does not add spaces between concatenated strings, so you'll need to add them yourself.

Example:

  let ourStr = "I come first. ";
  ourStr += "I come second.";
ourStr now has a value of the string I come first. I come second..
*/



/* Exercise*/
//COMPLETE Build myStr over several lines by concatenating these two strings: This is the first sentence. and This is the second sentence. using the += operator. Use the += operator similar to how it is shown in the example and be sure to include a space between the two strings. Start by assigning the first string to myStr, then add on the second string.

//[x] myStr should have a value of the string This is the first sentence. This is the second sentence.

//[x] You should use the += operator to build myStr.

/* Initial content
let myStr;
*/


/* Solution */
let myStr = "This is the first sentence."; 
myStr += "This is the second sentence."

//BUG: FCC Misssing space behind endpoint in first sentence on exercise statement