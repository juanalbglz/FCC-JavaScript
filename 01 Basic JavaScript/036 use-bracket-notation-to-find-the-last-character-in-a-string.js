/*
Title:  Use Bracket Notation to Find the Last Character in a String
URL:    https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/use-bracket-notation-to-find-the-last-character-in-a-string
*/

/* Example
In order to get the last letter of a string, you can subtract one from the string's length.

For example, if const firstName = "Ada", you can get the value of the last letter of the string by using firstName[firstName.length - 1].

Example:

const firstName = "Ada";
const lastLetter = firstName[firstName.length - 1];
lastLetter would have a value of the string a.



*/



/* Exercise*/
//COMPLETE Use bracket notation to find the last character in the lastName variable.

//NOTE Hint: Try looking at the example above if you get stuck.

//[x] lastLetterOfLastName should be the letter e.

//[x] You should use .length to get the last letter.

/* Initial content
// Setup
const lastName = "Lovelace";

// Only change code below this line
const lastLetterOfLastName = lastName; // Change this line
*/


/* Solution */
// Setup
const lastName = "Lovelace";

// Only change code below this line
const lastLetterOfLastName = lastName[lastName.length -1]; // Change this line
console.log(lastLetterOfLastName)