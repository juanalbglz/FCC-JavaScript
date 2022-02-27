/*
Title:  Return a Sorted Array Without Changing the Original Array
URL:    https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/return-a-sorted-array-without-changing-the-original-array
*/

/* Example
A side effect of the sort method is that it changes the order of the elements in the original array. In other words, it mutates the array in place. One way to avoid this is to first concatenate an empty array to the one being sorted (remember that slice and concat return a new array), then run the sort method.


*/


/* Exercise*/
//TODO Use the sort method in the nonMutatingSort function to sort the elements of an array in ascending order. The function should return a new array, and not mutate the globalArray variable.


/* Initial content
const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
  // Only change code below this line


  // Only change code above this line
}

nonMutatingSort(globalArray);
*/


/* Solution */
const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
  // Only change code below this line
  let newArr = [...arr];
  return newArr.sort(function(a,b){
    return a===b? 0: a > b ? 1: -1;
  });

  // Only change code above this line
}

nonMutatingSort(globalArray);