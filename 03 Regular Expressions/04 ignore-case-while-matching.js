/*
Title:  Ignore Case While Matching
URL:    https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/ignore-case-while-matching
*/

/* Example
  Up until now, you've looked at regexes to do literal matches of strings. But sometimes, you might want to also match case differences.

  Case (or sometimes letter case) is the difference between uppercase letters and lowercase letters. Examples of uppercase are A, B, and C. Examples of lowercase are a, b, and c.

  You can match both cases using what is called a flag. There are other flags but here you'll focus on the flag that ignores case - the i flag. You can use it by appending it to the regex. An example of using this flag is /ignorecase/i. This regex can match the strings ignorecase, igNoreCase, and IgnoreCase.
*/


/* Exercise*/
  //COMPLETE Write a regex fccRegex to match freeCodeCamp, no matter its case. Your regex should not match any abbreviations or variations with spaces.

  //[x] Your regex should match the string freeCodeCamp
  //[x] Your regex should match the string FreeCodeCamp
  //[x] Your regex should match the string FreecodeCamp
  //[x] Your regex should match the string FreeCodecamp
  //[x] Your regex should not match the string Free Code Camp
  //[x] Your regex should match the string FreeCOdeCamp
  //[x] Your regex should not match the string FCC
  //[x] Your regex should match the string FrEeCoDeCamp
  //[x] Your regex should match the string FrEeCodECamp
  //[x] Your regex should match the string FReeCodeCAmp

/* Initial content
  let myString = "freeCodeCamp";
  let fccRegex = /change/; // Change this line
  let result = fccRegex.test(myString);
*/


/* Solution */
let myString = "freeCodeCamp";
let fccRegex = /freecodecamp/i; // Change this line
let result = fccRegex.test(myString);