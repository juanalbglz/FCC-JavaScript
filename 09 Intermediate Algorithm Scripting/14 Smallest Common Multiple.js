/*
Title:  Smallest Common Multiple
URL:    https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/smallest-common-multiple
*/

/* Exercise*/
//TODO Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

//TODO The range will be an array of two numbers that will not necessarily be in numerical order.

//TODO For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.


/* Initial content
  function smallestCommons(arr) {
   return arr;
  }

  smallestCommons([1,5]);
*/


/* Solution */
function smallestCommons(arr) {

  //build array of numbers
  function numbers(arr){
    let max = Math.max.apply(null, arr);
    let min = Math.min.apply(null, arr);
    let numbers = [];
    for (let i = min; i <=max; i++){
      numbers.push(i)
    }
    return numbers;
  }

  //check if a number is prime
  function isPrime(n){
    if (n === 1) {
      return true;
    } else {
      for (let num = 2; num < n; num++){
        if (n % num == 0){
          return false;
        }   
      }
    }
    return true;
    }

    //find all primes lower or equal max value
    function primes(n){
      let primeNums = {}
      for(let num = 1; num <= n; num++){
        if(isPrime(num)){
          primeNums[num] = 0;
        }
      }
      return primeNums;
    }

    //factorize a number
    function factorize(n, obj){
      for (const factor in obj) {
        if (n%parseInt(factor) == 0){
          obj[factor]+= 1
        }
      }
      return obj;
    }

    let fullArr = numbers(arr);
    let factors = primes(fullArr[fullArr.length-1])
    for (let element of fullArr){
      factorize(element, factors)
    }
    console.log(factorize(5, factors))
}

smallestCommons([1,5]);

//TODO change obj so that is affected the prototype? for primes
//TODO mcm evaluate each property and set only max values
//TODO mcm multiplicate max values of each prime