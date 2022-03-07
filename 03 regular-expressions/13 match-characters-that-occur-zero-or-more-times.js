/*
  Title:  Match Characters that Occur Zero or More Times
  URL:    https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/match-characters-that-occur-zero-or-more-times
*/

/* Example
The last challenge used the plus + sign to look for characters that occur one or more times. There's also an option that matches characters that occur zero or more times.

The character to do this is the asterisk or star: *.

let soccerWord = "gooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go* /; //IMPORTANT added a space to avoid losing comment. THIS SPACE DOESN'T GO THERE; OTHERWISE WILL BE EVALUATEAD AS PART OF THE REGEX
soccerWord.match(goRegex);
gPhrase.match(goRegex);
oPhrase.match(goRegex);
In order, the three match calls would return the values ["goooooooo"], ["g"], and null.
*/


/* Exercise*/
  //COMPLETE For this challenge, chewieQuote has been initialized as the string Aaaaaaaaaaaaaaaarrrgh! behind the scenes. Create a regex chewieRegex that uses the * character to match an uppercase A character immediately followed by zero or more lowercase a characters in chewieQuote. Your regex does not need flags or character classes, and it should not match any of the other quotes.
  //NOTE 
  //[x] Your regex chewieRegex should use the * character to match zero or more a characters.
  //[x] Your regex should match the string A in chewieQuote.
  //[x] Your regex should match the string Aaaaaaaaaaaaaaaa in chewieQuote.
  //[x] Your regex chewieRegex should match 16 characters in chewieQuote.
  //[x] Your regex should not match any characters in the string He made a fair move. Screaming about it can't help you.
  //[x] Your regex should not match any characters in the string Let him have it. It's not wise to upset a Wookiee.



/* Initial content
  // Only change code below this line
  let chewieRegex = /change/; // Change this line
  // Only change code above this line

  let result = chewieQuote.match(chewieRegex);
*/


/* Solution */
// Only change code below this line
let chewieRegex = /Aa*/g; // Change this line
// Only change code above this line

let result = chewieQuote.match(chewieRegex);
