/*
Title:  Pig Latin
URL:    https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/pig-latin
*/

/* Exercise*/
//TODO Pig Latin is a way of altering English Words. The rules are as follows:

//TODO If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.

//TODO If a word begins with a vowel, just add way at the end.

//TODO Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.


/* Initial content
  function translatePigLatin(str) {
    return str;
  }

  translatePigLatin("consonant");
*/


/* Solution */
function translatePigLatin(str) {
  let regex = /^[bcdfghjklmnpqrstvwxyz]+/
  let consonants = str.match(regex);
return consonants !== null
? str
    .replace(regex, "")
    .concat(consonants)
    .concat('ay')
: str.concat('way')
}

console.log(translatePigLatin("consonant"));
console.log(translatePigLatin("glove"));
console.log(translatePigLatin("algorithm"));