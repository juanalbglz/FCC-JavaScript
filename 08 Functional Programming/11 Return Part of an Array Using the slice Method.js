/*
Title:  Return Part of an Array Using the slice Method
URL:    https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/return-part-of-an-array-using-the-slice-method
*/

/* Example
The slice method returns a copy of certain elements of an array. It can take two arguments, the first gives the index of where to begin the slice, the second is the index for where to end the slice (and it's non-inclusive). If the arguments are not provided, the default is to start at the beginning of the array through the end, which is an easy way to make a copy of the entire array. The slice method does not mutate the original array, but returns a new one.

Here's an example:

  const arr = ["Cat", "Dog", "Tiger", "Zebra"];
  const newArray = arr.slice(1, 3);
newArray would have the value ["Dog", "Tiger"].

*/


/* Exercise*/
//TODO Use the slice method in the sliceArray function to return part of the anim array given the provided beginSlice and endSlice indices. The function should return an array.


/* Initial content
  function sliceArray(anim, beginSlice, endSlice) {
    // Only change code below this line


    // Only change code above this line
  }

  const inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
  sliceArray(inputAnim, 1, 3);
*/


/* Solution */
function sliceArray(anim, beginSlice, endSlice) {
  // Only change code below this line
  return anim.slice(beginSlice,endSlice);

  // Only change code above this line
}

const inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
sliceArray(inputAnim, 1, 3);