/*
  Title:  Return Largest Numbers in Arrays
  URL:    https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/return-largest-numbers-in-arrays
*/

/* Example

*/


/* Exercise*/
  //COMPLETE Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

  //NOTE Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].
  //[x] largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]) should return an array.
  //[x] largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]) should return [27, 5, 39, 1001].
  //[x] largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]) should return [9, 35, 97, 1000000].
  //[x] largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]) should return [25, 48, 21, -3].

/* Initial content
  function largestOfFour(arr) {
    return arr;
  }

  largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
*/


/* Solution */
function largestOfFour(arr) {
  let maxArr = [];
  for (let subArr of arr){
    let max;
    for(let elem of subArr){
      max == undefined ? max = elem: false;
      elem > max ? max = elem: false;
    }
    maxArr.push(max);
  }
  return maxArr;
}

console.log(largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]));
