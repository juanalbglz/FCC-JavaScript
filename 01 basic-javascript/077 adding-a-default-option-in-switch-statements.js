/*
Title:  Adding a Default Option in Switch Statements
URL:    https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/adding-a-default-option-in-switch-statements
*/

/* EXAMPLE

In a switch statement you may not be able to specify all possible values as case statements. Instead, you can add the default statement which will be executed if no matching case statements are found. Think of it like the final else statement in an if/else chain.

A default statement should be the last case.

switch (num) {
  case value1:
    statement1;
    break;
  case value2:
    statement2;
    break;
...
  default:
    defaultStatement;
    break;
}

*/

/* EXERCISE

Write a switch statement to set answer for the following conditions:
a - apple
b - bird
c - cat
default - stuff

*/

//[x] switchOfStuff("a") should return the string apple
//[x] switchOfStuff("b") should return the string bird
//[x] switchOfStuff("c") should return the string cat
//[x] switchOfStuff("d") should return the string stuff
//[x] switchOfStuff(4) should return the string stuff
//[x] You should not use any if or else statements
//[x] You should use a default statement
//[x] You should have at least 3 break statements


/* Initial content
function switchOfStuff(val) {
  let answer = "";
  // Only change code below this line



  // Only change code above this line
  return answer;
}

switchOfStuff(1);
*/

/* Solution */
function switchOfStuff(val) {
  let answer = "";
  // Only change code below this line
  switch(val){
    case 'a':
      answer = "apple";
      break;
    case 'b':
      answer = "bird";
      break;
    case 'c':
      answer = "cat";
      break;
    default:
      answer = "stuff";
  }
  // Only change code above this line
return answer;
}

switchOfStuff(1);