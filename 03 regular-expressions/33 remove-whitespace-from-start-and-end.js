/*
  Title:  Remove Whitespace from Start and End
  URL:    https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/remove-whitespace-from-start-and-end
*/

/* Example
  Sometimes whitespace characters around strings are not wanted but are there. Typical processing of strings is to remove the whitespace at the start and end of it.
*/


/* Exercise*/
  //COMPLETE Write a regex and use the appropriate string methods to remove whitespace at the beginning and end of strings.

  //NOTE The String.prototype.trim() method would work here, but you'll need to complete this challenge using regular expressions
  //[x] result should be equal to the string Hello, World!
  //[x] Your solution should not use the String.prototype.trim() method.
  //[x] The result variable should not directly be set to a string
  //[x] The value of the hello variable should not be changed.

/* Initial content
  let hello = "   Hello, World!  ";
  let wsRegex = /change/; // Change this line
  let result = hello; // Change this line
*/


/* Solution */
let hello = "   Hello, World!  ";
let wsRegex = /\s{2,}/g; // Change this line
let result = hello.replace(wsRegex, ""); // Change this line
console.log(result);