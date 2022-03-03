/*
Title:  Manipulate Arrays With pop()
URL:    https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/manipulate-arrays-with-pop
*/

/* Example
Another way to change the data in an array is with the .pop() function.
*/
//IMPORTANT.pop() is used to pop a value off of the end of an array. We can store this popped off value by assigning it to a variable. In other words, .pop() removes the last element from an array and returns that element.
/*
Any type of entry can be popped off of an array - numbers, strings, even nested arrays.

const threeArr = [1, 4, 6];
const oneDown = threeArr.pop();
console.log(oneDown);
console.log(threeArr);
The first console.log will display the value 6, and the second will display the value [1, 4].
*/


/* Exercise*/
//COMPLETE  Use the .pop() function to remove the last item from myArray and assign the popped off value to a new variable, removedFromMyArray.
//[x] myArray should only contain [["John", 23]]..
//[x] You should use pop() on myArray.
//[x] removedFromMyArray should only contain ["cat", 2].


/* Initial content
// Setup
const myArray = [["John", 23], ["cat", 2]];

// Only change code below this line

*/


/* Solution */
// Setup
const myArray = [["John", 23], ["cat", 2]];

// Only change code below this line
var removedFromMyArray = myArray.pop();
console.log("removedFromMyArray " +removedFromMyArray)