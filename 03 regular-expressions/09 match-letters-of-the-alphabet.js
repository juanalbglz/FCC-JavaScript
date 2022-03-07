/*
  Title:  Match Letters of the Alphabet
  URL:    https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/match-letters-of-the-alphabet
*/


/* Example
  You saw how you can use character sets to specify a group of characters to match, but that's a lot of typing when you need to match a large range of characters (for example, every letter in the alphabet). Fortunately, there is a built-in feature that makes this short and simple.

  Inside a character set, you can define a range of characters to match using a hyphen character: -.

  For example, to match lowercase letters a through e you would use [a-e].

  let catStr = "cat";
  let batStr = "bat";
  let matStr = "mat";
  let bgRegex = /[a-e]at/;
  catStr.match(bgRegex);
  batStr.match(bgRegex);
  matStr.match(bgRegex);
  In order, the three match calls would return the values ["cat"], ["bat"], and null.
*/


/* Exercise*/
  //COMPLETE Match all the letters in the string quoteSample.
  //NOTE Be sure to match both uppercase and lowercase letters.
  //[x] Your regex alphabetRegex should match 35 items.
  //[x] Your regex alphabetRegex should use the global flag.
  //[x] Your regex alphabetRegex should use the case insensitive flag.
 

/* Initial content
  let quoteSample = "The quick brown fox jumps over the lazy dog.";
  let alphabetRegex = /change/; // Change this line
  let result = alphabetRegex; // Change this line
*/


/* Solution */
let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[Thequickbrownfoxjumpsoverthelazydog]/ig; // Change this line
let result = quoteSample.match(alphabetRegex); // Change this line
console.log(result)
