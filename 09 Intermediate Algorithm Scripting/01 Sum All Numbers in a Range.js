/*
Title:  Sum All Numbers in a Range
URL:    https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-numbers-in-a-range
*/

/* Exercise*/
//TODO We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

//For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.


/* Initial content
function sumAll(arr) {
  return 1;
}

sumAll([1, 4]);
*/


/* Solution */
function sumAll(arr) {
  //get lowest
  let sum = 0;
  let min = arr[1] < arr[0]? arr[1]: arr[0];
  let max = arr[1] > arr[0]? arr[1]: arr[0];
  for (let i = min; i <= max; i++){
    sum += i;
  }
  return sum;
}

sumAll([1, 4]);