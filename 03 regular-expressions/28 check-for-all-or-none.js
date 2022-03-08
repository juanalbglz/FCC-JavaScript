/*
  Title:  Check for All or None
  URL:    https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/check-for-all-or-none
*/

/* Example
  Sometimes the patterns you want to search for may have parts of it that may or may not exist. However, it may be important to check for them nonetheless.

  You can specify the possible existence of an element with a question mark, ?. This checks for zero or one of the preceding element. You can think of this symbol as saying the previous element is optional.

  For example, there are slight differences in American and British English and you can use the question mark to match both spellings.

    let american = "color";
    let british = "colour";
    let rainbowRegex= /colou?r/;
    rainbowRegex.test(american);
    rainbowRegex.test(british);

  Both uses of the test method would return true.
*/


/* Exercise*/
  //COMPLETE Change the regex favRegex to match both the American English (favorite) and the British English (favourite) version of the word.
  //NOTE 
  //[x] Your regex should use the optional symbol, ?.
  //[x] Your regex should match the string favorite
  //[x] Your regex should match the string favourite
  //[x] Your regex should not match the string fav


/* Initial content
  let favWord = "favorite";
  let favRegex = /change/; // Change this line
  let result = favRegex.test(favWord);
*/


/* Solution */
let favWord = "favorite";
let favRegex = /favou?rite/; // Change this line
let result = favRegex.test(favWord);
