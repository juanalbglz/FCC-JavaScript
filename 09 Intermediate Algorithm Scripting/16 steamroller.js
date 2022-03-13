/*
  URL:    https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/steamroller
  Title:  Steamroller
*/

/* Example

*/


/* Exercise*/
  //COMPLETE Flatten a nested array. You must account for varying levels of nesting.
  //NOTE 
  //[x] 
  //[x] 
  //[x] 


/* Initial content
function steamrollArray(arr) {
  var arr = arr.join(",").split(",");

  return arr;
}

steamrollArray([1, [2], [3, [[4]]]]);
*/


/* Solution */
function steamrollArray(arr) {
  const newArr = [];
  arr.forEach(item =>{
    Array.isArray(item) ? 
      newArr.push(...steamrollArray(item)): 
      newArr.push(item);
  });
  return newArr;
}

steamrollArray([1, [2], [3, [[4]]]]);
