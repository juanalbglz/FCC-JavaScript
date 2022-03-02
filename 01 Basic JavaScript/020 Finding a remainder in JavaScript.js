/*
Title:  Finding a Remainder in JavaScript
URL:    https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/finding-a-remainder-in-javascript
*/

/* Example
The remainder operator % gives the remainder of the division of two numbers.

Example

  5 % 2 = 1 because
  Math.floor(5 / 2) = 2 (Quotient)
  2 * 2 = 4
  5 - 4 = 1 (Remainder)
Usage
In mathematics, a number can be checked to be even or odd by checking the remainder of the division of the number by 2.

  17 % 2 = 1 (17 is Odd)
  48 % 2 = 0 (48 is Even)
Note: The remainder operator is sometimes incorrectly referred to as the modulus operator. It is very similar to modulus, but does not work properly with negative numbers.


/* Exercise*/
//COMPLETE Set remainder equal to the remainder of 11 divided by 3 using the remainder (%) operator.
//[x] The variable remainder should be initialized
//[x] The value of remainder should be 2
//[x] You should use the % operator

/* Initial content
const remainder = 0;

*/


/* Solution */
const remainder = 11%3;

//BUG: FCC takes in charge the comments, so the exercise as it is here throws an error.