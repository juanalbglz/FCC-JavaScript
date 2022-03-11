/*
  Title:  Factorialize a Number
  URL:    https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/factorialize-a-number
*/

/* Example

*/


/* Exercise*/
  //COMPLETE Return the factorial of the provided integer. If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n. Factorials are often represented with the shorthand notation n! For example: 5! = 1 * 2 * 3 * 4 * 5 = 120 Only integers greater than or equal to zero will be supplied to the function.

  //[x] factorialize(5) should return a number.
  //[x] factorialize(5) should return 120.
  //[x] factorialize(10) should return 3628800.
  //[x] factorialize(20) should return 2432902008176640000.
  //[x] factorialize(0) should return 1.


/* Initial content
  function factorialize(num) {
    return num;
  }

  factorialize(5);
*/


/* Solution */
function factorialize(num) {
  let value = 1;
  for (let n=1; n<= num; n++){
    value*=n;
  }
  return value;
}

console.log(factorialize(5));
