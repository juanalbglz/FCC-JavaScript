/*
Title:  Match a Literal String with Different Possibilities
URL:    https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/match-a-literal-string-with-different-possibilities
*/

/* Example
  Using regexes like /coding/, you can look for the pattern coding in another string.

  This is powerful to search single strings, but it's limited to only one pattern. You can search for multiple patterns using the alternation or OR operator: |.

  This operator matches patterns either before or after it. For example, if you wanted to match the strings yes or no, the regex you want is /yes|no/.

  You can also search for more than just two patterns. You can do this by adding more patterns with more OR operators separating them, like /yes|no|maybe/.
*/


/* Exercise*/
  //COMPLETE Complete the regex petRegex to match the pets dog, cat, bird, or fish.

  //[x] Your regex petRegex should return true for the string John has a pet dog.
  //[x] Your regex petRegex should return false for the string Emma has a pet rock.
  //[x] Your regex petRegex should return true for the string Emma has a pet bird.
  //[x] Your regex petRegex should return true for the string Liz has a pet cat.
  //[x] Your regex petRegex should return false for the string Kara has a pet dolphin.
  //[x] Your regex petRegex should return true for the string Alice has a pet fish.
  //[x] Your regex petRegex should return false for the string Jimmy has a pet computer.

/* Initial content
  let petString = "James has a pet cat.";
  let petRegex = /change/; // Change this line
  let result = petRegex.test(petString);
*/


/* Solution */
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // Change this line
let result = petRegex.test(petString);