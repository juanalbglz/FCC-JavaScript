/*
  Title:  Catch Mixed Usage of Single and Double Quotes
  URL:    https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/debugging/catch-mixed-usage-of-single-and-double-quotes
*/

/* Example
  JavaScript allows the use of both single (') and double (") quotes to declare a string. Deciding which one to use generally comes down to personal preference, with some exceptions.

  Having two choices is great when a string has contractions or another piece of text that's in quotes. Just be careful that you don't close the string too early, which causes a syntax error.

  Here are some examples of mixing quotes:

  const grouchoContraction = "I've had a perfectly wonderful evening, but this wasn't it.";
  const quoteInString = "Groucho Marx once said 'Quote me as saying I was mis-quoted.'";
  const uhOhGroucho = 'I've had a perfectly wonderful evening, but this wasn't it.';
  The first two are correct, but the third is incorrect.

  Of course, it is okay to use only one style of quotes. You can escape the quotes inside the string by using the backslash (\) escape character:

  const allSameQuotes = 'I\'ve had a perfectly wonderful evening, but this wasn\'t it.';
*/


/* Exercise*/
  //COMPLETE Fix the string so it either uses different quotes for the href value, or escape the existing ones. Keep the double quote marks around the entire string.

  //[x] Your code should fix the quotes around the href value #Home by either changing or escaping them.
  //[x] Your code should keep the double quotes around the entire string.


/* Initial content
  let innerHtml = "<p>Click here to <a href="#Home">return home</a></p>";
  console.log(innerHtml);
*/


/* Solution */
let innerHtml = "<p>Click here to <a href='#Home'>return home</a></p>";
console.log(innerHtml);
