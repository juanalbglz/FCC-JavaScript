/*
  Title:  String
  URL:    URL
*/

/* Example

*/


/* Exercise*/
//COMPLETE Reverse the provided string. You may need to turn the string into an array before you can reverse it. Your result must be a string.

//[x] reverseString("hello") should return a string.
//[x] reverseString("hello") should return the string olleh.
//[x] reverseString("Howdy") should return the string ydwoH.
//[x] reverseString("Greetings from Earth") should return the string htraE morf sgniteerG.


/* Initial content
  function reverseString(str) {
    return str;
  }

  reverseString("hello");
*/


/* Solution */

function reverseString(str) {
  let reversed = []
  for (let char in str){
    reversed.unshift(str[char])
  }
  return reversed.join("");
}

console.log(reverseString("hello"));