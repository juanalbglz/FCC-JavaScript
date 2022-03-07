/*
  Title:  Match Single Characters Not Specified
  URL:    https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/match-single-characters-not-specifiedL
*/

/* Example
  So far, you have created a set of characters that you want to match, but you could also create a set of characters that you do not want to match. These types of character sets are called negated character sets.

  To create a negated character set, you place a caret character (^) after the opening bracket and before the characters you do not want to match.

  For example, /[^aeiou]/gi matches all characters that are not a vowel. Note that characters like ., !, [, @, / and white space are matched - the negated vowel character set only excludes the vowel characters.
*/


/* Exercise*/
  //COMPLETE Create a single regex that matches all characters that are not a number or a vowel. Remember to include the appropriate flags in the regex.

  //[x] Your regex myRegex should match 9 items.
  //[x] Your regex myRegex should use the global flag.
  //[x] Your regex myRegex should use the case insensitive flag.
 

/* Initial content
  let quoteSample = "3 blind mice.";
  let myRegex = /change/; // Change this line
  let result = myRegex; // Change this line
*/


/* Solution */
let quoteSample = "3 blind mice.";
let myRegex = /[^0-9aeiou]/ig; // Change this line
let result = quoteSample.match(myRegex); // Change this line
console.log(result)