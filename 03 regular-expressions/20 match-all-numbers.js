/*
  Title:  Match All Numbers
  URL:    https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/match-all-numbers
*/

/* Example
  You've learned shortcuts for common string patterns like alphanumerics. Another common pattern is looking for just digits or numbers.

  The shortcut to look for digit characters is \d, with a lowercase d. This is equal to the character class [0-9], which looks for a single character of any number between zero and nine.
*/


/* Exercise*/
  //COMPLETE 
  //NOTE 
  //[x] Your regex should use the shortcut character to match digit characters
  //[x] Your regex should use the global flag.
  //[x] Your regex should find 1 digit in the string 9.
  //[x] Your regex should find 2 digits in the string Catch 22.
  //[x] Your regex should find 3 digits in the string 101 Dalmatians.
  //[x] Your regex should find no digits in the string One, Two, Three.
  //[x] Your regex should find 2 digits in the string 21 Jump Street.
  //[x] Your regex should find 4 digits in the string 2001: A Space Odyssey.


/* Initial content
  let movieName = "2001: A Space Odyssey";
  let numRegex = /change/; // Change this line
  let result = movieName.match(numRegex).length;

*/


/* Solution */
let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g; // Change this line
let result = movieName.match(numRegex).length;
console.log(result);
