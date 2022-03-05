/*
Title:  Manipulate Arrays With shift()
URL:    https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/manipulate-arrays-with-shift
*/

/* Example
pop() always removes the last element of an array. What if you want to remove the first?
*/
//IMPORTANT That's where .shift() comes in. It works just like .pop(), except it removes the first element instead of the last.
/*
Example:

const ourArray = ["Stimpson", "J", ["cat"]];
const removedFromOurArray = ourArray.shift();
removedFromOurArray would have a value of the string Stimpson, and ourArray would have ["J", ["cat"]].

Use the .shift() function to remove the first item from myArray and assign the "shifted off" value to a new variable, removedFromMyArray.
*/


/* Exercise*/
//COMPLETE  Use the .shift() function to remove the first item from myArray and assign the "shifted off" value to a new variable, removedFromMyArray.
//[x] myArray should now equal [["dog", 3]].
//[x] removedFromMyArray should contain ["John", 23].



/* Initial content
// Setup
const myArray = [["John", 23], ["dog", 3]];

// Only change code below this line

*/


/* Solution */
// Setup
const myArray = [["John", 23], ["dog", 3]];

// Only change code below this line
var removedFromMyArray = myArray.shift();
console.log("removedFromMyArray:", removedFromMyArray)