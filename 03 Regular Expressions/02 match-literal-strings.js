/*
Title:  Match Literal Strings
URL:    https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/match-literal-strings
*/

/* Example
  In the last challenge, you searched for the word Hello using the regular expression /Hello/. That regex searched for a literal match of the string Hello. Here's another example searching for a literal match of the string Kevin:

    let testStr = "Hello, my name is Kevin.";
    let testRegex = /Kevin/;
    testRegex.test(testStr);

  This test call will return true.

  Any other forms of Kevin will not match. For example, the regex /Kevin/ will not match kevin or KEVIN.

    let wrongRegex = /kevin/;
    wrongRegex.test(testStr);

  This test call will return false.

  A future challenge will show how to match those other forms as well.
*/


/* Exercise*/
  //COMPLETE Complete the regex waldoRegex to find "Waldo" in the string waldoIsHiding with a literal match.

  //[x] Your regex waldoRegex should find the string Waldo
  //[x] Your regex waldoRegex should not search for anything else.
  //[x] You should perform a literal string match with your regex.


/* Initial content
  let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
  let waldoRegex = /search/; // Change this line
  let result = waldoRegex.test(waldoIsHiding);
*/


/* Solution */
let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/; // Change this line
let result = waldoRegex.test(waldoIsHiding);