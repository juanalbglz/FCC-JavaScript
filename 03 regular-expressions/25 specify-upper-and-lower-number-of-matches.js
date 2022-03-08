/*
  Title:  Specify Upper and Lower Number of Matches
  URL:    https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/specify-upper-and-lower-number-of-matches
*/

/* Example
  Recall that you use the plus sign + to look for one or more characters and the asterisk * to look for zero or more characters. These are convenient but sometimes you want to match a certain range of patterns.

  You can specify the lower and upper number of patterns with quantity specifiers. Quantity specifiers are used with curly brackets ({ and }). You put two numbers between the curly brackets - for the lower and upper number of patterns.

  For example, to match only the letter a appearing between 3 and 5 times in the string ah, your regex would be /a{3,5}h/.

  let A4 = "aaaah";
  let A2 = "aah";
  let multipleA = /a{3,5}h/;
  multipleA.test(A4);
  multipleA.test(A2);
  The first test call would return true, while the second would return false.


*/


/* Exercise*/
  //COMPLETE Change the regex ohRegex to match the entire phrase Oh no only when it has 3 to 6 letter h's.
  //NOTE 
  //[x] Your regex should use curly brackets.
  //[x] Your regex should not match the string Ohh no
  //[x] Your regex should match the string Ohhh no
  //[x] Your regex should match the string Ohhhh no
  //[x] Your regex should match the string Ohhhhh no
  //[x] Your regex should match the string Ohhhhhh no
  //[x] Your regex should not match the string Ohhhhhhh no


/* Initial content
  let ohStr = "Ohhh no";
  let ohRegex = /change/; // Change this line
  let result = ohRegex.test(ohStr);
*/


/* Solution */
let ohStr = "Ohhh no";
let ohRegex = /[O][h]{3,6} [n][o]/; // Change this line
let result = ohRegex.test(ohStr);
