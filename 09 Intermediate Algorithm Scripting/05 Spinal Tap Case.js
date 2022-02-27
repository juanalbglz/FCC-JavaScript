/*
Title:  Spinal Tap Case
URL:    https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/spinal-tap-case
*/


/* Exercise*/
//TODO Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.


/* Initial content
function spinalCase(str) {
  return str;
}

spinalCase('This Is Spinal Tap');
*/


/* Solution */
function spinalCase(str) {
  return str.replace(/([a-z])([A-Z])/g, "$1 $2").split(/\W|_/).join("-").toLowerCase();
}

console.log(spinalCase('This Is Spinal Tap')); //OK
console.log(spinalCase("thisIsSpinalTap"));
// should return the string this-is-spinal-tap.
console.log(spinalCase("The_Andy_Griffith_Show"));//OK
//should return the string the-andy-griffith-show.
console.log(spinalCase("Teletubbies say Eh-oh")); 
//should return the string teletubbies-say-eh-oh.
console.log(spinalCase("AllThe-small Things")); 
// should return the string all-the-small-things.