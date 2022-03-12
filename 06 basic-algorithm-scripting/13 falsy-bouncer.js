/*
  URL:    https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/falsy-bouncer
  Title:  Falsy Bouncer
*/

/* Example

*/


/* Exercise*/
  //COMPLETE Remove all falsy values from an array. Falsy values in JavaScript are false, null, 0, "", undefined, and NaN. Hint: Try converting each value to a Boolean.
  
  //[x] bouncer([7, "ate", "", false, 9]) should return [7, "ate", 9].
  //[x] bouncer(["a", "b", "c"]) should return ["a", "b", "c"].
  //[x] bouncer([false, null, 0, NaN, undefined, ""]) should return [].
  //[x] bouncer([null, NaN, 1, 2, undefined]) should return [1, 2].


/* Initial content
  function bouncer(arr) {
    return arr;
  }

  bouncer([7, "ate", "", false, 9]);
*/


/* Solution */
function bouncer(arr) {
  let newArr = [];
  for (let element of arr){
    if (element){ //As falsy values evaluates false, just check for them
    newArr.push(element);
    }
  }
  
  return newArr;
}

console.log(bouncer([7, "ate", "", false, 9]));
