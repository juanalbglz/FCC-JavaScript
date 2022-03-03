/*
Title:  Use Bracket Notation to Find the Nth-to-Last Character in a String
URL:    https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/use-bracket-notation-to-find-the-nth-to-last-character-in-a-string
*/

/* Example
You can use the same principle we just used to retrieve the last character in a string to retrieve the Nth-to-last character.

For example, you can get the value of the third-to-last letter of the const firstName = "Augusta" string by using firstName[firstName.length - 3]

Example:

const firstName = "Augusta";
const thirdToLastLetter = firstName[firstName.length - 3];
thirdToLastLetter would have a value of the string s.



*/



/* Exercise*/
//COMPLETE Use bracket notation to find the second-to-last character in the lastName string.

//NOTE Hint: Try looking at the example above if you get stuck.

//[x] secondToLastLetterOfLastName should be the letter c.

//[x] You should use .length to get the second last letter.

/* Initial content
// Setup
const lastName = "Lovelace";

// Only change code below this line
const secondToLastLetterOfLastName = lastName; // Change this line
*/


/* Solution */
// Setup
const lastName = "Lovelace";

// Only change code below this line
const secondToLastLetterOfLastName = lastName[lastName.length -3]; // Change this line