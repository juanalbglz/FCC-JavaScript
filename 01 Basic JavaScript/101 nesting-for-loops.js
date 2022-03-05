/*
  Title:  Nesting For Loops
  URL:    https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/nesting-for-loops
*/

/* Example
  If you have a multi-dimensional array, you can use the same logic as the prior waypoint to loop through both the array and any sub-arrays. Here is an example:

    const arr = [
      [1, 2], [3, 4], [5, 6]
    ];

    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++) {
        console.log(arr[i][j]);
      }
    }
  This outputs each sub-element in arr one at a time. Note that for the inner loop, we are checking the .length of arr[i], since arr[i] is itself an array.
*/

/* Exercise*/
//COMPLETE Modify function multiplyAll so that it returns the product of all the numbers in the sub-arrays of arr.
//[x] multiplyAll([[1], [2], [3]]) should return 6
//[x] multiplyAll([[1, 2], [3, 4], [5, 6, 7]]) should return 5040
//[x] multiplyAll([[5, 1], [0.2, 4, 0.5], [3, 9]]) should return 54



/* Initial content
  function multiplyAll(arr) {
    let product = 1;
    // Only change code below this line

    // Only change code above this line
    return product;
  }

  multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);

*/


/* Solution */
function multiplyAll(arr) {
  let product = 1;
  // Only change code below this line
  for (let i = 0; i < arr.length; i++){
    for (let j = 0; j < arr[i].length; j++){
      product *= arr[i][j]
    }
  }
  // Only change code above this line
  return product;
}

multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);