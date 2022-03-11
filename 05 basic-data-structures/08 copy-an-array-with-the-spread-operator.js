/*
  Title:  Copy an Array with the Spread Operator
  URL:    https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/copy-an-array-with-the-spread-operator
*/

/* Example
  While slice() allows us to be selective about what elements of an array to copy, among several other useful tasks, ES6's new spread operator allows us to easily copy all of an array's elements, in order, with a simple and highly readable syntax. The spread syntax simply looks like this: ...

  In practice, we can use the spread operator to copy an array like so:

  let thisArray = [true, true, undefined, false, null];
  let thatArray = [...thisArray];
  thatArray equals [true, true, undefined, false, null]. thisArray remains unchanged and thatArray contains the same elements as thisArray.
*/


/* Exercise*/
  //COMPLETE We have defined a function, copyMachine which takes arr (an array) and num (a number) as arguments. The function is supposed to return a new array made up of num copies of arr. We have done most of the work for you, but it doesn't work quite right yet. Modify the function using spread syntax so that it works correctly (hint: another method we have already covered might come in handy here!).


  //[x] copyMachine([true, false, true], 2) should return [[true, false, true], [true, false, true]]
  //[x] copyMachine([1, 2, 3], 5) should return [[1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3]]
  //[x] copyMachine([true, true, null], 1) should return [[true, true, null]]
  //[x] copyMachine(["it works"], 3) should return [["it works"], ["it works"], ["it works"]]
  //[x] The copyMachine function should utilize the spread operator with array arr


/* Initial content
  function copyMachine(arr, num) {
    let newArr = [];
    while (num >= 1) {
      // Only change code below this line

      // Only change code above this line
      num--;
    }
    return newArr;
  }

  console.log(copyMachine([true, false, true], 2));
*/


/* Solution */
function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    // Only change code below this line
    newArr.unshift([...arr]);
    // Only change code above this line
    num--;
  }
  return newArr;
}

console.log(copyMachine([true, false, true], 2));
