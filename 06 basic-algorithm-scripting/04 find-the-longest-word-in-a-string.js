/*
  Title:  Find the Longest Word in a String
  URL:    https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/find-the-longest-word-in-a-string
*/

/* Example

*/


/* Exercise*/
  //COMPLETE Return the length of the longest word in the provided sentence. Your response should be a number.
  //NOTE 
  //[x] findLongestWordLength("The quick brown fox jumped over the lazy dog") should return a number.
  //[x] findLongestWordLength("The quick brown fox jumped over the lazy dog") should return 6.
  //[x] findLongestWordLength("May the force be with you") should return 5.
  //[x] findLongestWordLength("Google do a barrel roll") should return 6.
  //[x] findLongestWordLength("What is the average airspeed velocity of an unladen swallow") should return 8.
  //[x] findLongestWordLength("What if we try a super-long word such as otorhinolaryngology") should return 19.


/* Initial content
  function findLongestWordLength(str) {
    return str.length;
  }

  findLongestWordLength("The quick brown fox jumped over the lazy dog");
*/


/* Solution */
function findLongestWordLength(str) {
  let words = str.split(" ");
  let max = 0;
  for(let word of words){
    if (word.length > max){
      max = word.length;
    }
  }
  return max;
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));
