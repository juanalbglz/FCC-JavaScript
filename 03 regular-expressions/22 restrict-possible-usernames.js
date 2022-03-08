/*
  Title:  Restrict Possible Usernames
  URL:    https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/restrict-possible-usernames
*/

/* Example
  Usernames are used everywhere on the internet. They are what give users a unique identity on their favorite sites.

  You need to check all the usernames in a database. Here are some simple rules that users have to follow when creating their username.

  Usernames can only use alpha-numeric characters.

  The only numbers in the username have to be at the end. There can be zero or more of them at the end. Username cannot start with the number.

  Username letters can be lowercase and uppercase.

  Usernames have to be at least two characters long. A two-character username can only use alphabet letters as characters.
*/


/* Exercise*/
  //COMPLETE Change the regex userCheck to fit the constraints listed above.
  //NOTE 
  //[x] Your regex should match the string JACK
  //[x] Your regex should not match the string J
  //[x] Your regex should match the string Jo
  //[x] Your regex should match the string Oceans11
  //[x] Your regex should match the string RegexGuru
  //[x] Your regex should not match the string 007
  //[x] Your regex should not match the string 9
  //[x] Your regex should not match the string A1
  //[x] Your regex should not match the string BadUs3rnam3
  //[x] Your regex should match the string Z97
  //[x] Your regex should not match the string c57bT3
  //[x] Your regex should match the string AB1
  //[x] Your regex should not match the string J%4



/* Initial content
  let username = "JackOfAllTrades";
  let userCheck = /change/; // Change this line
  let result = userCheck.test(username);
*/


/* Solution */
let username = "JackOfAllTrades";
let userCheck = /(^[a-zA-Z]{2,}\d*$|^[a-zA-Z]{1,}\d{2,}$)/; // https://regex101.com/library/dyoKLx
let result = userCheck.test(username);
console.log(result);