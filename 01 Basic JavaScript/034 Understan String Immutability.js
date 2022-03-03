/*
Title:  Understand String Immutability
URL:    https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/understand-string-immutability
*/

/* Example
In JavaScript, String values are immutable, which means that they cannot be altered once created.

For example, the following code:

let myStr = "Bob";
myStr[0] = "J";
cannot change the value of myStr to Job, because the contents of myStr cannot be altered. Note that this does not mean that myStr cannot be changed, just that the individual characters of a string literal cannot be changed. The only way to change myStr would be to assign it with a new string, like this:

let myStr = "Bob";
myStr = "Job";


*/



/* Exercise*/
//COMPLETE Correct the assignment to myStr so it contains the string value of Hello World using the approach shown in the example above.

//[x] myStr should have a value of the string Hello World.

//[x] You should not change the code above the specified comment.

/* Initial content
// Setup
let myStr = "Jello World";

// Only change code below this line
myStr[0] = "H"; // Change this line
// Only change code above this line
*/


/* Solution */
// Setup
let myStr = "Jello World";

// Only change code below this line
myStr = "Hello World"; // Change this line
// Only change code above this line