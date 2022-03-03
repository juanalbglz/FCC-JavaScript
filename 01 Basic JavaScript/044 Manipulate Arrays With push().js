/*
Title:  Manipulate Arrays With push()
URL:    https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/manipulate-arrays-with-push
*/

/* Example
An easy way to append data to the end of an array is via the push() function.
*/
//IMPORTANT .push() takes one or more parameters and "pushes" them onto the end of the array.
/*
Examples:

  const arr1 = [1, 2, 3];
  arr1.push(4);

  const arr2 = ["Stimpson", "J", "cat"];
  arr2.push(["happy", "joy"]);
arr1 now has the value [1, 2, 3, 4] and arr2 has the value ["Stimpson", "J", "cat", ["happy", "joy"]].
*/


/* Exercise*/
//COMPLETE  Push ["dog", 3] onto the end of the myArray variable.
//[x]myArray should now equal [["John", 23], ["cat", 2], ["dog", 3]]..


/* Initial content
// Setup
const myArray = [["John", 23], ["cat", 2]];

// Only change code below this line
*/


/* Solution */
// Setup
const myArray = [["John", 23], ["cat", 2]];

// Only change code below this line
const myData = new Array ("dog", 3);
myArray.push(myData);