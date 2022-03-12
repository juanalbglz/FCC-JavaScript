/*
  URL:    https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/finders-keepers
  Title:  Finders Keepers
*/

/* Example

*/


/* Exercise*/
  //COMPLETE Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'. This means that given an element x, the 'truth test' is passed if func(x) is true. If no element passes the test, return undefined.

  //[x] findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }) should return 8.
  //[x] findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; }) should return undefined.



/* Initial content
  function findElement(arr, func) {
    let num = 0;
    return num;
  }

  findElement([1, 2, 3, 4], num => num % 2 === 0);
*/


/* Solution */
function findElement(arr, func) {
  let num = 0;
  for (let element of arr){
    if (func(element)){
      return element;
    }
  }
  return undefined;
}

console.log(findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }));
