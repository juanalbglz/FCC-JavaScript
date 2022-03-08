/*
  Title:  Match All Non-Numbers
  URL:    https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/match-all-non-numbers
*/

/* Example
  The last challenge showed how to search for digits using the shortcut \d with a lowercase d. You can also search for non-digits using a similar shortcut that uses an uppercase D instead.

  The shortcut to look for non-digit characters is \D. This is equal to the character class [^0-9], which looks for a single character that is not a number between zero and nine.The last challenge showed how to search for digits using the shortcut \d with a lowercase d. You can also search for non-digits using a similar shortcut that uses an uppercase D instead.

  The shortcut to look for non-digit characters is \D. This is equal to the character class [^0-9], which looks for a single character that is not a number between zero and nine.
*/


/* Exercise*/
  //COMPLETE 
  //NOTE 
  //[x] Your regex should use the shortcut character to match non-digit characters
  //[x] Your regex should use the global flag.
  //[x] Your regex should find no non-digits in the string 9.
  //[x] Your regex should find 6 non-digits in the string Catch 22.
  //[x] Your regex should find 11 non-digits in the string 101 Dalmatians.
  //[x] Your regex should find 15 non-digits in the string One, Two, Three.
  //[x] Your regex should find 12 non-digits in the string 21 Jump Street.
  //[x] Your regex should find 17 non-digits in the string 2001: A Space Odyssey.


/* Initial content
  let movieName = "2001: A Space Odyssey";
  let noNumRegex = /change/; // Change this line
  let result = movieName.match(noNumRegex).length;
*/


/* Solution */
let movieName = "2001: A Space Odyssey";
let noNumRegex = /\D/g; // Change this line
let result = movieName.match(noNumRegex).length;
console.log(result);
