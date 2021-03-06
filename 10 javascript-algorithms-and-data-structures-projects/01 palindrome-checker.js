/*
Title:  Palindrome Checker
URL:    https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/palindrome-checker
*/

/* Example

*/


/* Exercise*/
//COMPLETE Return true if the given string is a palindrome. Otherwise, return false.

//COMPLETEA palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

//NOTE: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

//COMPLETE We'll pass strings with varying formats, such as racecar, RaceCar, and race CAR among others.

//COMPLETE We'll also pass strings with special symbols, such as 2A3*3a2, 2A3 3a2, and 2_A3*3#A2


/* Initial content
function palindrome(str) {
  return true;
}

palindrome("eye");
*/


/* Solution */
function palindrome(str) {
  let regex = /[^a-zA-Z1-9]/ig;
  str = str.replace(regex,"").toLowerCase();
  let rStr = str.split("").reverse().join("")
  if (str == rStr ){
    return true
  }
  return false;
}

console.log(palindrome("eye"));