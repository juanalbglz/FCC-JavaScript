/*
Title:  Diff Two Arrays
URL:    https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/diff-two-arrays
*/


/* Exercise*/
//TODO Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

//Note: You can return the array with its elements in any order.


/* Initial content
  function diffArray(arr1, arr2) {
    const newArr = [];
    return newArr;
  }

  diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
*/


/* Solution */
function diffArray(arr1, arr2) {
  const newArr = [];
  //get throwght all the second arr with all elements of first
  for (let i = 0; i < arr1.length; i++){
    if (arr2.indexOf(arr1[i]) < 0){
      newArr.push(arr1[i])
    }
  }
  //get throwght all the first arr with all elements of second
  for (let j = 0; j < arr2.length; j++){
    if (arr1.indexOf(arr2[j]) < 0){
      newArr.push(arr2[j])
    }
  }
  
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);