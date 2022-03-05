/*
Title:  Use Recursiono to Create a Range of Numbers
URL:    https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/use-recursion-to-create-a-range-of-numbers
*/

/* Example
  Continuing from the previous challenge, we provide you another opportunity to create a recursive function to solve a problem.
*/


/* Exercise*/
//TODO We have defined a function named rangeOfNumbers with two parameters. The function should return an array of integers which begins with a number represented by the startNum parameter and ends with a number represented by the endNum parameter. The starting number will always be less than or equal to the ending number. Your function must use recursion by calling itself and not use loops of any kind. It should also work for cases where both startNum and endNum are the same.
//[x] Your function should return an array.
//[x] Your code should not use any loop syntax (for or while or higher order functions such as forEach, map, filter, or reduce).
//[x] rangeOfNumbers should use recursion (call itself) to solve this challenge.
//[x] rangeOfNumbers(1, 5) should return [1, 2, 3, 4, 5].
//[x] rangeOfNumbers(6, 9) should return [6, 7, 8, 9].
//[x] rangeOfNumbers(4, 4) should return [4].

/* Initial content
  function rangeOfNumbers(startNum, endNum) {
    return [];
  };
*/


/* Solution */
function rangeOfNumbers(startNum, endNum) {
  if (startNum > endNum) {
    return [];
  } else {
    const Range = rangeOfNumbers(startNum + 1, endNum);
    Range.unshift(startNum);
    return Range;
  }
};