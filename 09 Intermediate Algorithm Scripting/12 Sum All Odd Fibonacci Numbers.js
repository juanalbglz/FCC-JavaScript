/*
Title:  Sum All Odd Fibonacci Numbers
URL:    https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-odd-fibonacci-numbers
*/

/* Example

*/


/* Exercise*/
//TODO Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

//TODO The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

//TODO For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.


/* Initial content
function sumFibs(num) {
  return num;
}

sumFibs(4);
*/


/* Solution */
function Fib(n){
  if (n===0) {
    return 1;
  };
  if (n===1) {
    return 1
  } else {
      return Fib(n-1) + Fib(n-2);
  };
};

function sumFibs(num) {
  var sum = 0;
  let i = 0; 
  do {
      console.log(`i = ${i}, Fib(${i}) ${Fib(i)}`)
      if (Fib(i)%2 === 1){
        sum += Fib(i)
      }
      console.log(`sum =  ${sum}`);
      i++
  } while (num >= Fib(i));
    return sum;
  }


console.log(sumFibs(5));