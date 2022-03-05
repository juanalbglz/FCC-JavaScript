/*
Title:  Introducing Else If Statements
URL:    https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/introducing-else-if-statements
*/

/* EXAMPLE

If you have multiple conditions that need to be addressed, you can chain if statements together with else if statements.

  if (num > 15) {
    return "Bigger than 15";
  } else if (num < 5) {
    return "Smaller than 5";
  } else {
    return "Between 5 and 15";
  }

*/

/* Exercise*/
//COMPLETE Convert the logic to use else if statements.

//[x] You should have at least two else statements
//[x] You should have at least two if statements
//[x] You should have closing and opening curly braces for each if else code block.
//[x] testElseIf(0) should return the string Smaller than 5
//[x] testElseIf(5) should return the string Between 5 and 10
//[x] testElseIf(7) should return the string Between 5 and 10
//[x] testElseIf(10) should return the string Between 5 and 10
//[x] testElseIf(12) should return the string Greater than 10

/* Initial content
function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  }

  if (val < 5) {
    return "Smaller than 5";
  }

  return "Between 5 and 10";
}

testElseIf(7);
*/

/* Solution */
function testElseIf(val) {
  if (val <= 10 && val >= 5) {
    return "Between 5 and 10";
  } else if(val > 10){
    return "Greater than 10";
  } else {
    return "Smaller than 5";
  }

  
}

testElseIf(7);