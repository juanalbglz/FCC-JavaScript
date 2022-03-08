/*
  Title:  https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/positive-and-negative-lookahead
  URL:    Positive and Negative Lookahead
*/

/* Example
  Lookaheads are patterns that tell JavaScript to look-ahead in your string to check for patterns further along. This can be useful when you want to search for multiple patterns over the same string.

  There are two kinds of lookaheads: positive lookahead and negative lookahead.

  A positive lookahead will look to make sure the element in the search pattern is there, but won't actually match it. A positive lookahead is used as (?=...) where the ... is the required part that is not matched.

  On the other hand, a negative lookahead will look to make sure the element in the search pattern is not there. A negative lookahead is used as (?!...) where the ... is the pattern that you do not want to be there. The rest of the pattern is returned if the negative lookahead part is not present.

  Lookaheads are a bit confusing but some examples will help.

  let quit = "qu";
  let noquit = "qt";
  let quRegex= /q(?=u)/;
  let qRegex = /q(?!u)/;
  quit.match(quRegex);
  noquit.match(qRegex);
  Both of these match calls would return ["q"].

  A more practical use of lookaheads is to check two or more patterns in one string. Here is a (naively) simple password checker that looks for between 3 and 6 characters and at least one number:

  let password = "abc123";
  let checkPass = /(?=\w{3,6})(?=\D*\d)/;
  checkPass.test(password);
*/


/* Exercise*/
  //COMPLETE Use lookaheads in the pwRegex to match passwords that are greater than 5 characters long, and have two consecutive digits.
  //NOTE 
  //[x] Your regex should use two positive lookaheads.
  //[x] Your regex should not match the string astronaut
  //[x] Your regex should not match the string banan1
  //[x] Your regex should match the string bana12
  //[x] Your regex should match the string abc123
  //[x] Your regex should not match the string 12345
  //[x] Your regex should match the string 8pass99
  //[x] Your regex should not match the string 1a2bcde
  //[x] Your regex should match the string astr1on11aut


  /* Initial content
  let sampleWord = "astronaut";
  let pwRegex = /change/; // Change this line
  let result = pwRegex.test(sampleWord);
*/


/* Solution */
let sampleWord = "astronaut";
let pwRegex = /(?=\w{5,})(?=\D*\d\d))/; // https://regexr.com/6gvr6
let result = pwRegex.test(sampleWord);
