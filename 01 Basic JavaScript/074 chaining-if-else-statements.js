/*
Title:  Chaining If Else Statements
URL:    https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/chaining-if-else-statements
*/

/* EXAMPLE

if/else statements can be chained together for complex logic. Here is pseudocode of multiple chained if / else if statements:

  if (condition1) {
    statement1
  } else if (condition2) {
    statement2
  } else if (condition3) {
    statement3
  . . .
  } else {
    statementN
}

*/

/* Exercise*/
//COMPLETE Write chained if/else if statements to fulfill the following conditions:

/*
num < 5 - return Tiny
num < 10 - return Small
num < 15 - return Medium
num < 20 - return Large
num >= 20 - return Huge
*/

//[x] You should have at least four else statements
//[x] You should have at least four if statements
//[x] You should have at least one return statement
//[x] testSize(0) should return the string Tiny
//[x] testSize(4) should return the string Tiny
//[x] testSize(5) should return the string Small
//[x] testSize(8) should return the string Small
//[x] testSize(10) should return the string Medium
//[x] testSize(14) should return the string Medium
//[x] testSize(15) should return the string Large
//[x] testSize(17) should return the string Large
//[x] testSize(20) should return the string Huge
//[x] testSize(25) should return the string Huge

/* Initial content
function testSize(num) {
  // Only change code below this line


  return "Change Me";
  // Only change code above this line
}

testSize(7);
*/

/* Solution */
function testSize(num) {
  // Only change code below this line
  let returnString = ""
  if(num < 5){
    returnString = "Tiny";
  } else if (num < 10){
    returnString = "Small";
  }  else if (num < 15){
    returnString = "Medium";
  } else if (num < 20){
    returnString = "Large";
  } else if (num >= 20){
    returnString = "Huge";
  }

  return returnString;
  // Only change code above this line
}

testSize(7);