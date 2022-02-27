/*
Title:  Sum All Primes
URL:    https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-primes
*/

/* Exercise*/
//TODO A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

//TODO Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.


/* Initial content
function sumPrimes(num) {
  return num;
}

sumPrimes(10);
*/


/* Solution */

//const PRIME =[1,2,3,5,7]
function prime(num){
  for (let i = 1; i < num; i++){
    //console.log(`${num} % ${i} = ${num%i}`)
    if (i>1){
        if (num%i==0){
          return false;
        }
      }  
    }
    return true;  
  }

function sumPrimes(num) {
  var sum = 0;
  for (let i = num; i > 1; i--){
    if (prime(i)) {
      //console.log(`${i} is prime, adding ${i} to ${sum}`)
      sum += i;
      //console.log(`Sum is now ${sum}`)
    }
  }

  return sum;
}

console.log(sumPrimes(977));