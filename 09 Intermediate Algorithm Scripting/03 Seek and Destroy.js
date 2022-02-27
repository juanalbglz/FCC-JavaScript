/*
Title:  Seek and Destroy
URL:    https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/seek-and-destroy
*/

/* Exercise*/
//TODO You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.


/* Initial content
function destroyer(arr) {
  return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
*/


/* Solution */
function destroyer(arr) {
  //convert args to an Array
	let args = [...arguments];
  let target = args.shift();
  console.log(`target ${target} with ${args}`)
  for (let element of args){
    console.log(`checking element ${element} from ${args}`)
    while (target.indexOf(element) >=0){
console.log(`match for ${element} found on ${target} at  position ${target.indexOf(element)}`)
      console.log(`running splice(${target.indexOf(element)},1)`);
      target.splice(target.indexOf(element),1);
      console.log(`target = ${target}`);
    }
  }
  return target;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3)
destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3)
destroyer([3, 5, 1, 2, 2], 2, 3, 5)
destroyer([2, 3, 2, 3], 2, 3)
destroyer(["tree", "hamburger", 53], "tree", 53)
destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan")