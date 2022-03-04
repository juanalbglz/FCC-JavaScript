/*
Title:  Return a Value from a Function with Return
URL:    https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/return-a-value-from-a-function-with-return
*/

/* Example
We can pass values into a function with arguments. You can use a return statement to send a value back out of a function.

Example

  function plusThree(num) {
    return num + 3;
  }

  const answer = plusThree(5);
answer has the value 8.

plusThree takes an argument for num and returns a value equal to num + 3.


/* Exercise*/
//COMPLETE Create a function timesFive that accepts one argument, multiplies it by 5, and returns the new value.

//[x] timesFive should be a function
//[x] timesFive(5) should return 25
//[x] timesFive(2) should return 10
//[x] timesFive(0) should return 0


/* Solution */
function timesFive (num){
  return num * 5;
}

console.log(timesFive(5))