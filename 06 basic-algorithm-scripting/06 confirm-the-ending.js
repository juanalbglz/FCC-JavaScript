/*
  Title:  Confirm the Ending
  URL:    https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/confirm-the-ending
*/

/* Example

*/


/* Exercise*/
  //COMPLETE Check if a string (first argument, str) ends with the given target string (second argument, target).
  //COMPLETE This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.

  //NOTE 
  //[x] confirmEnding("Bastian", "n") should return true.
  //[x] confirmEnding("Congratulation", "on") should return true.
  //[x] confirmEnding("Connor", "n") should return false.
  //[x] confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification") should return false.
  //[x] confirmEnding("He has to give me a new name", "name") should return true.
  //[x] confirmEnding("Open sesame", "same") should return true.
  //[x] confirmEnding("Open sesame", "sage") should return false.
  //[x] confirmEnding("Open sesame", "game") should return false.
  //[x] confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain") should return false.
  //[x] confirmEnding("Abstraction", "action") should return true.
  //[x] Your code should not use the built-in method .endsWith() to solve the challenge.


/* Initial content
  function confirmEnding(str, target) {
    return str;
  }

  confirmEnding("Bastian", "n");
*/


/* Solution */
  function confirmEnding(str, target) {
    (target == str.splice(str.length-target.length, target.length))? true:false;
  }

  confirmEnding("Bastian", "n");
