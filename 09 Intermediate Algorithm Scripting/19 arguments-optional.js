/*
  URL:    https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/arguments-optional
  Title:  Arguments Optional
*/

/* Example

*/


/* Exercise*/
  //COMPLETE Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum. For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function. Calling this returned function with a single argument will then return the sum:
/*
var sumTwoAnd = addTogether(2);
sumTwoAnd(3) returns 5.
*/
  //NOTE If either argument isn't a valid number, return undefined.
  //[x] addTogether(2, 3) should return 5.
  //[x] addTogether(23, 30) should return 53.
  //[x] addTogether(5)(7) should return 12.
  //[x] addTogether("https://www.youtube.com/watch?v=dQw4w9WgXcQ") should return undefined.
  //[x] addTogether(2, "3") should return undefined.
  //[x] addTogether(2)([3]) should return undefined.
  //[x] addTogether("2", 3) should return undefined.

/* Initial content
function addTogether() {
  return false;
}

addTogether(2,3);
*/


/* Solution */
function addTogether() {
  if (arguments){
    for (let argument in arguments){
      if (arguments.every(argument => isNaN(argument))){
        return undefined;
      } else {
        if (Object.keys(arguments).length > 1){
          return arguments[0]+arguments[1]
        } else {
          return addTogether(arguments[0])
        }
      }
    }
  }
  return false;
}

addTogether(2,3);
//still not working fine