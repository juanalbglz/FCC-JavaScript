/*
  URL:    https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/chunky-monkey
  Title:  Chunky Monkey
*/

/* Example

*/


/* Exercise*/
  //COMPLETE Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
  //NOTE 
  //[x] chunkArrayInGroups(["a", "b", "c", "d"], 2) should return [["a", "b"], ["c", "d"]].
  //[x] chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3) should return [[0, 1, 2], [3, 4, 5]].
  //[x] chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2) should return [[0, 1], [2, 3], [4, 5]].
  //[x] chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4) should return [[0, 1, 2, 3], [4, 5]].
  //[x] chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3) should return [[0, 1, 2], [3, 4, 5], [6]].
  //[x] chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4) should return [[0, 1, 2, 3], [4, 5, 6, 7], [8]].
  //[x] chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2) should return [[0, 1], [2, 3], [4, 5], [6, 7], [8]].


/* Initial content
  function chunkArrayInGroups(arr, size) {
    return arr;
  }

  chunkArrayInGroups(["a", "b", "c", "d"], 2);
*/


/* Solution */

function chunkArrayInGroups(arr, size) {
  let arrCopy = [...arr]
  let chunkyArr = [];
  let steps = Math.ceil(arr.length/size);
  for (let step = 0; step < steps; step++){
    console.log(step);
    
    if (step < steps){
      chunkyArr.push(arrCopy.splice(0, size));
    } else {
      chunkyArr.push(arr.splice(0));
    }
    
  }
  return chunkyArr;
}