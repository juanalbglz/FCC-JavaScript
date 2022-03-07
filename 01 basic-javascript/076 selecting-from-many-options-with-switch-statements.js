/*
Title:  Selecting from Many Options with Switch Statements
URL:    https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/selecting-from-many-options-with-switch-statements
*/

/* EXAMPLE

If you have many options to choose from, use a switch statement. A switch statement tests a value and can have many case statements which define various possible values. Statements are executed from the first matched case value until a break is encountered.

Here is an example of a switch statement:

switch(lowercaseLetter) {
  case "a":
    console.log("A");
    break;
  case "b":
    console.log("B");
    break;
}
case values are tested with strict equality (===). The break tells JavaScript to stop executing statements. If the break is omitted, the next statement will be executed.

*/

/* EXERCISE

Write a switch statement which tests val and sets answer for the following conditions:
1 - alpha
2 - beta
3 - gamma
4 - delta

*/

//[x] caseInSwitch(1) should have a value of the string alpha
//[x] caseInSwitch(2) should have a value of the string beta
//[x] caseInSwitch(3) should have a value of the string gamma
//[x] caseInSwitch(4) should have a value of the string delta
//[x] You should not use any if or else statements
//[x] You should have at least 3 break statements


/* Initial content
function caseInSwitch(val) {
  let answer = "";
  // Only change code below this line



  // Only change code above this line
  return answer;
}

caseInSwitch(1);
*/

/* Solution */
function caseInSwitch(val) {
  let answer = "";
  // Only change code below this line
  switch(val){
    case 1:
      answer = "alpha";
      break;
    case 2:
      answer = "beta";
      break;
    case 3:
      answer = "gamma";
      break;
    case 4:
      answer = "delta";
      break;
  }


  // Only change code above this line
  return answer;
}

caseInSwitch(1);