/*
  URL:    https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/repeat-a-string-repeat-a-string
  Title:  Repeat a String Repeat a String
*/

/* Example

*/


/* Exercise*/
  //COMPLETE Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number. For the purpose of this challenge, do not use the built-in .repeat() method.
  //NOTE 
  //[x] repeatStringNumTimes("*", 3) should return the string ***.
  //[x] repeatStringNumTimes("abc", 3) should return the string abcabcabc.
  //[x] repeatStringNumTimes("abc", 4) should return the string abcabcabcabc.
  //[x] repeatStringNumTimes("abc", 1) should return the string abc.
  //[x] repeatStringNumTimes("*", 8) should return the string ********.
  //[x] repeatStringNumTimes("abc", -2) should return an empty string ("").
  //[x] The built-in repeat() method should not be used.
  //[x] repeatStringNumTimes("abc", 0) should return "".


/* Initial content
  function repeatStringNumTimes(str, num) {
    return str;
  }

  repeatStringNumTimes("abc", 3);
*/


/* Solution */
function repeatStringNumTimes(str, num) {
  let repeatedStr = '';
  for (let i=1; i <= num; i++){
    repeatedStr += str;
  }
  
  return repeatedStr;
}

console.log(repeatStringNumTimes("abc", 3));
