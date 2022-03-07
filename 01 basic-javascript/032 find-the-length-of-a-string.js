/*
Title:  Find the Length of a String
URL:    https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/find-the-length-of-a-string
*/

/* Example
You can find the length of a String value by writing .length after the string variable or string literal.

  console.log("Alan Peter".length);
The value 10 would be displayed in the console.

For example, if we created a variable const firstName = "Ada", we could find out how long the string Ada is by using the firstName.length property.
*/



/* Exercise*/
//COMPLETE Use the .length property to count the number of characters in the lastName variable and assign it to lastNameLength.

//[x] You should not change the variable declarations in the // Setup section.

//[x] lastNameLength should be equal to eight.

//[x] You should be getting the length of lastName by using .length like this: lastName.length.
/* Initial content
// Setup
let lastNameLength = 0;
const lastName = "Lovelace";

// Only change code below this line
lastNameLength = lastName;
*/


/* Solution */
// Setup
let lastNameLength = 0;
const lastName = "Lovelace";

// Only change code below this line
lastNameLength = lastName.length;
console.log(lastNameLength)