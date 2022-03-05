/*
Title:  Compound Assignment With Augmented Division
URL:    https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/compound-assignment-with-augmented-division
*/

/* Example
 The /= operator divides a variable by another number.

myVar = myVar / 5;
Will divide myVar by 5. This can be rewritten as:

myVar /= 5;
*/


/* Exercise*/
//COMPLETE Convert the assignments for a, b, and c to use the -= operator.
//[x] a should equal 4.
//[x] b should equal 27.
//[x] c should equal 3.
//[x] You should use the /= operator for each variable.
//[x] You should not modify the code above the specified comment.


/* Initial content
let a = 48;
let b = 108;
let c = 33;

// Only change code below this line
a = a / 12;
b = b / 4;
c = c / 11;
*/


/* Solution */
let a = 48;
let b = 108;
let c = 33;

// Only change code below this line
b /= 4;
c /= 11;
a /= 12;