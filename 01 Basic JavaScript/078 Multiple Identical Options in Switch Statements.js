/*
Title:  Multiple Identical Options in Switch Statements
URL:    https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/multiple-identical-options-in-switch-statements
*/

/* EXAMPLE

If the break statement is omitted from a switch statement's case, the following case statement(s) are executed until a break is encountered. If you have multiple inputs with the same output, you can represent them in a switch statement like this:

let result = "";
switch(val) {
  case 1:
  case 2:
  case 3:
    result = "1, 2, or 3";
    break;
  case 4:
    result = "4 alone";
}
Cases for 1, 2, and 3 will all produce the same result.

*/

/* EXERCISE

Write a switch statement to set answer for the following ranges:
1-3 - Low
4-6 - Mid
7-9 - High

*/

//NOTE You will need to have a case statement for each number in the range.

//[x] sequentialSizes(1) should return the string Low
//[x] sequentialSizes(2) should return the string Low
//[x] sequentialSizes(3) should return the string Low
//[x] sequentialSizes(4) should return the string Mid
//[x] sequentialSizes(5) should return the string Mid
//[x] sequentialSizes(6) should return the string Mid
//[x] sequentialSizes(7) should return the string High
//[x] sequentialSizes(8) should return the string High
//[x] sequentialSizes(9) should return the string High
//[x] You should not use any if or else statements
//[x] You should have nine case statements



/* Initial content
function sequentialSizes(val) {
  let answer = "";
  // Only change code below this line



  // Only change code above this line
  return answer;
}

sequentialSizes(1);
*/

/* Solution */
function sequentialSizes(val) {
  let answer = "";
  // Only change code below this line
  switch(val){
    case 1:
    case 2:
    case 3:
      answer = "Low";
      break;
    case 4:
    case 5:
    case 6:
      answer = "Mid";
      break;
    case 7:
    case 8:
    case 9:
      answer = "High";
  }


  // Only change code above this line
  return answer;
}

sequentialSizes(1);