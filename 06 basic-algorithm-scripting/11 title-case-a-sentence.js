/*
  URL:    https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/title-case-a-sentence
  Title:  Title Case a Sentence
*/

/* Example

*/


/* Exercise*/
  //COMPLETE Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case. For the purpose of this exercise, you should also capitalize connecting words like the and of.

  //[x] titleCase("I'm a little tea pot") should return a string.
  //[x] titleCase("I'm a little tea pot") should return the string I'm A Little Tea Pot.
  //[x] titleCase("sHoRt AnD sToUt") should return the string Short And Stout.
  //[x] titleCase("HERE IS MY HANDLE HERE IS MY SPOUT") should return the string Here Is My Handle Here Is My Spout.


/* Initial content
  function titleCase(str) {
    return str;
  }

  titleCase("I'm a little tea pot");
*/


/* Solution */
function titleCase(str) {
  let newStr = '';
  let lowStr = str.toLowerCase();
  for (let i = 0; i < str.length; i++){
    let char = lowStr[i];
    newStr += (i==0) ? char.toUpperCase(): str[i-1] == ' ' ? char.toUpperCase(): char;
  }

  return newStr;
}


console.log(titleCase(‘località àtilacol’));
