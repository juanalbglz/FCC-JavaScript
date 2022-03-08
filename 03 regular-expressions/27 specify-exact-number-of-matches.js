/*
  Title:  Specify Exact Number of Matches
  URL:    https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/specify-exact-number-of-matches
*/

/* Example
  You can specify the lower and upper number of patterns with quantity specifiers using curly brackets. Sometimes you only want a specific number of matches.

  To specify a certain number of patterns, just have that one number between the curly brackets.

  For example, to match only the word hah with the letter a 3 times, your regex would be /ha{3}h/.

    let A4 = "haaaah";
    let A3 = "haaah";
    let A100 = "h" + "a".repeat(100) + "h";
    let multipleHA = /ha{3}h/;
    multipleHA.test(A4);
    multipleHA.test(A3);
    multipleHA.test(A100);
  In order, the three test calls would return false, true, and false.
*/


/* Exercise*/
  //COMPLETE Change the regex timRegex to match the word Timber only when it has four letter m's.
  //NOTE 
  //[x] Your regex should use curly brackets.
  //[x] Your regex should not match the string Timber
  //[x] Your regex should not match the string Timmber
  //[x] Your regex should not match the string Timmmber
  //[x] Your regex should match the string Timmmmber
  //[x] Your regex should not match the string Timber with 30 m's in it.


/* Initial content
  let timStr = "Timmmmber";
  let timRegex = /change/; // Change this line
  let result = timRegex.test(timStr);
*/


/* Solution */
let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/; // Change this line
let result = timRegex.test(timStr);
