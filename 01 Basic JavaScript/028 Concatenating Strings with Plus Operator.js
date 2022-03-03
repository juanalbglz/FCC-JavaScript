/*
Title:  Concatenating Strings with Plus Operator
URL:    https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/concatenating-strings-with-plus-operator
*/

/* Example
n JavaScript, when the + operator is used with a String value, it is called the concatenation operator. You can build a new string out of other strings by concatenating them together.

Example

'My name is Alan,' + ' I concatenate.'
Note: Watch out for spaces. Concatenation does not add spaces between concatenated strings, so you'll need to add them yourself.

Example:

const ourStr = "I come first. " + "I come second.";
The string I come first. I come second. would be displayed in the console.
*/



/* Exercise*/
//COMPLETE Build myStr from the strings This is the start. and This is the end. using the + operator. Be sure to include a space between the two strings.

//[x] myStr should have a value of the string This is the start. This is the end.

//[x] You should use the + operator to build myStr.

//[x] myStr should be created using the const keyword.

//[x] You should assign the result to the myStr variable.

/* Initial content
const myStr = ""; // Change this line
*/


/* Solution */
const myStr = "This is the start. " + "This is the end.";
console.log(myStr)