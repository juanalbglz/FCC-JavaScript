/*
Title:  Missing letters
URL:    https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/missing-letters
*/

/* Example

*/


/* Exercise*/
//TODO Find the missing letter in the passed letter range and return it. If all letters are present in the range, return undefined.


/* Initial content
  function fearNotLetter(str) {
    return str;
  }

  fearNotLetter("abce");
*/


/* Solution */
function fearNotLetter(str) {
  // Initialize lastChar variable
  var lastChar = str.charCodeAt(0);

  // loop on the str to get the gape
  for (let i=1; i<str.length; i++){
    //if not correlaative, return char
    if (str.charCodeAt(i) == lastChar+i){
    } else{
      return String.fromCharCode(lastChar+i);
    }
  }
  return undefined;
}