/*
Title:  Extract Matches
URL:    https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/extract-matches
*/

/* Example
  So far, you have only been checking if a pattern exists or not within a string. You can also extract the actual matches you found with the .match() method.

  To use the .match() method, apply the method on a string and pass in the regex inside the parentheses.

  Here's an example:

    "Hello, World!".match(/Hello/);
    let ourStr = "Regular expressions";
    let ourRegex = /expressions/;
    ourStr.match(ourRegex);
  Here the first match would return ["Hello"] and the second would return ["expressions"].

  Note that the .match syntax is the "opposite" of the .test method you have been using thus far:

    'string'.match(/regex/);
    /regex/.test('string');
*/


/* Exercise*/
  //COMPLETE Apply the .match() method to extract the string coding.

  //[x] The result should have the string coding
  //[x] Your regex codingRegex should search for the string coding
  //[x] You should use the .match() method.


/* Initial content
  let extractStr = "Extract the word 'coding' from this string.";
  let codingRegex = /change/; // Change this line
  let result = extractStr; // Change this line
*/


/* Solution */
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; // Change this line
let result = extractStr.match(codingRegex); // Change this line