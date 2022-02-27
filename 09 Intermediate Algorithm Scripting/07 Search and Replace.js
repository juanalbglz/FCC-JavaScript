/*
Title:  Search and Replace
URL:    https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/search-and-replace
*/


/* Exercise*/
//TODO Perform a search and replace on the sentence using the arguments provided and return the new sentence.
//TODO First argument is the sentence to perform the search and replace on.
//TODO Second argument is the word that you will be replacing (before).
//TODO Third argument is what you will be replacing the second argument with (after).

//Note: Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word Book with the word dog, it should be replaced as Dog


/* Initial content
function myReplace(str, before, after) {
  return str;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
*/


/* Solution */
function myReplace(str, before, after) {
  let newStr = str.split(" ");
  let beforeCh = before[0];
  let afterCh = after[0];
  var replaceWord = "";
  if (beforeCh == beforeCh.toUpperCase()){
    replaceWord = after.replace(afterCh, afterCh.toUpperCase());
  } else {
    replaceWord = after.replace(afterCh, afterCh.toLowerCase());
  }
  newStr.splice(newStr.indexOf(before),1, replaceWord);
  return newStr.join(" ");
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
myReplace("He is Sleeping on the couch", "Sleeping", "sitting")
myReplace("I think we should look up there", "up", "Down")
myReplace("His name is Tom", "Tom", "john")