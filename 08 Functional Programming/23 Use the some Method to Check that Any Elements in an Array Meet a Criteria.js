/*
Title:  Use the some Method to Check that Any Elements in an Array Meet a Criteria
URL:    https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/use-the-some-method-to-check-that-any-elements-in-an-array-meet-a-criteria
*/

/* Example
The some method works with arrays to check if any element passes a particular test. It returns a Boolean value - true if any of the values meet the criteria, false if not.

For example, the following code would check if any element in the numbers array is less than 10:

const numbers = [10, 50, 8, 220, 110, 11];

numbers.some(function(currentValue) {
  return currentValue < 10;
});
The some method would return true.
*/


/* Exercise*/
//TODO Use the some method inside the checkPositive function to check if any element in arr is positive. The function should return a Boolean value.


/* Initial content
function checkPositive(arr) {
  // Only change code below this line


  // Only change code above this line
}

checkPositive([1, 2, 3, -4, 5]);
*/


/* Solution */
function checkPositive(arr) {
  // Only change code below this line
  return arr.some((a) => a > 0)

  // Only change code above this line
}

checkPositive([1, 2, 3, -4, 5]);