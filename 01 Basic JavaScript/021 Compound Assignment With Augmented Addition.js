/*
Title:  Compound Assignment With Augmented Addition
URL:    https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/compound-assignment-with-augmented-addition

/* Example
n programming, it is common to use assignments to modify the contents of a variable. Remember that everything to the right of the equals sign is evaluated first, so we can say:

  myVar = myVar + 5;

  to add 5 to myVar. Since this is such a common pattern, there are operators which do both a mathematical operation and assignment in one step.

One such operator is the += operator.

  let myVar = 1;
  myVar += 5;
  console.log(myVar);

  6 would be displayed in the console.
*/

/* Exercise*/
//COMPLETE Convert the assignments for a, b, and c to use the += operator
//[x] a should equal 15.
//[x] b should equal 26.
//[x] c should equal 19.
//[x] You should use the += operator for each variable.
//[x] You should not modify the code above the specified comment.

/* Initial content
let a = 3;
let b = 17;
let c = 12;

// Only change code below this line
a = a + 12;
b = 9 + b;
c = c + 7;
*/


/* Solution */
let a = 3;
let b = 17;
let c = 12;

// Only change code below this line
a += 12;
b += 9;
c += 7;

//BUG: FCC evaluates comments and check as invalid this solution