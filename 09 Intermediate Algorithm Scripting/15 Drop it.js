/*
Title:  Drop it
URL:    https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/drop-it
*/

/* Example

*/


/* Exercise*/
//COMPLETE Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it.

//COMPLETE Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.


/* Initial content
function dropElements(arr, func) {
  return arr;
}

dropElements([1, 2, 3], function(n) {return n < 3; });
*/


/* Solution */
function dropElements(arr, func) {
  while (arr.length > 0)
    {
      if (func(arr[0])){
        return(arr)
      } else {
        arr.shift()
      }
    }
  return arr;
}

console.log(dropElements([1, 2, 3,4], function(n) {return n >= 3; }));