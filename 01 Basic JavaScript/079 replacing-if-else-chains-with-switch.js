/*
Title:  Replacing If Else Chains with Switch
URL:    https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/replacing-if-else-chains-with-switch
*/

/* EXAMPLE

If you have many options to choose from, a switch statement can be easier to write than many chained if/else if statements. The following:

  if (val === 1) {
    answer = "a";
  } else if (val === 2) {
    answer = "b";
  } else {
    answer = "c";
  }
can be replaced with:

  switch(val) {
    case 1:
      answer = "a";
      break;
    case 2:
      answer = "b";
      break;
    default:
      answer = "c";
}

*/

/* EXERCISE

Change the chained if/else if statements into a switch statement.

*/

//[x] You should not use any else statements anywhere in the editor
//[x] You should not use any if statements anywhere in the editor
//[x] You should have at least four break statements
//[x] chainToSwitch("bob") should be the string Marley
//[x] chainToSwitch(42) should be the string The Answer
//[x] chainToSwitch(1) should be the string There is no #1
//[x] chainToSwitch(99) should be the string Missed me by this much!
//[x] chainToSwitch(7) should be the string Ate Nine
//[x] chainToSwitch("John") should be "" (empty string)
//[x] chainToSwitch(156) should be "" (empty string)


/* Initial content
function chainToSwitch(val) {
  let answer = "";
  // Only change code below this line

  if (val === "bob") {
    answer = "Marley";
  } else if (val === 42) {
    answer = "The Answer";
  } else if (val === 1) {
    answer = "There is no #1";
  } else if (val === 99) {
    answer = "Missed me by this much!";
  } else if (val === 7) {
    answer = "Ate Nine";
  }

  // Only change code above this line
  return answer;
}

chainToSwitch(7);
*/

/* Solution */
function chainToSwitch(val) {
  let answer = "";
  // Only change code below this line
  switch(val){
    case 'bob':
      answer = "Marley";
      break;
    case 42:
      answer = "The Answer";
      break;
    case 1:
      answer = "There is no #1";
      break;
    case 99:
      answer = "Missed me by this much!";
      break;
    case 7:
      answer = "Ate Nine";
  }

  // Only change code above this line
  return answer;
}

chainToSwitch(7);