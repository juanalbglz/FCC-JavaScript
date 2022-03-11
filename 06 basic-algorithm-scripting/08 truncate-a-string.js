/*
  URL:    freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/truncate-a-string
  Title:  Truncate a String
*/

/* Example

*/


/* Exercise*/
  //COMPLETE Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.
  //NOTE 
  //[x] truncateString("A-tisket a-tasket A green and yellow basket", 8) should return the string A-tisket....
  //[x] truncateString("Peter Piper picked a peck of pickled peppers", 11) should return the string Peter Piper....
  //[x] truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length) should return the string A-tisket a-tasket A green and yellow basket.
  //[x] truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2) should return the string A-tisket a-tasket A green and yellow basket.
  //[x] truncateString("A-", 1) should return the string A....
  //[x] truncateString("Absolutely Longer", 2) should return the string Ab....



/* Initial content
  function truncateString(str, num) {
    return str;
  }

  truncateString("A-tisket a-tasket A green and yellow basket", 8);
*/


/* Solution */
function truncateString(str, num) {
  let end = str.length > num ? '...': '';
  return str.slice(0,num)+end;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);
/*AFTER VIEWING SOLUTINOS*/
function truncateString(str, num) {
  return str.length > num ? str.slice(0,num) + '...' : str;
}