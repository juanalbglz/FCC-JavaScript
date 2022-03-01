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
//ARRANGE YOUR PRIMES TO FIR YOUR NEEDS
const PRIMES = [ 2,  3,  5,  7,  11,  13,  17,  19,  23,  29,  31,  37,  1,  43,  47,  53,  59,  61,  67,  71,  73,  79,  83,  89,  97 ]

//A function to find out all primes in a given range of numbers
//min and max won't be checked.
//the function doesnt check against 1 or the tested number.
function primeRange(start,end){
  let primes = []
  for (let num=start; num<=end; num++){
//    console.log(`num = ${num}`)
    let divisor = 2;
    let prime = true;
    while ((prime) && (divisor < num-1)){
//      console.log(`${num} divided by ${divisor}`);
      if ((num%divisor) === 0){
//        console.log(`${num} divided by ${divisor} exact division`);
        prime = false;
      }
      divisor ++;
    }
    if (prime){
      primes.push(num);
    }
  }
  return primes;
}

//A funcition to get PRIMES to check for a number
function getPrimesOf(n){
  var myPrimes = []
  for (let i=0; i<=n; i++){
    if (PRIMES[i]<=n){
      myPrimes.push(PRIMES[i])
    } else{
      return myPrimes;
    }
  }
}

//A function to factorize any number lower than the const PRIMES
//Returns an array following the PRIMES structure showing the amount
//of times a factor is part of the number
//example:
//[00,02,03,00,00,01]
//for interpreting the Array we need to look at the PRIMEs
//[02,03,05,07,11,13]
//So the previous result would represent
//[00,02,03,00,00, 01]
//[2⁰*3²*5³*7⁰*11⁰*13¹]= 13*125*9=14625

function factorize(n) {
  //Load n PRIMES array
  var myPrimes = getPrimesOf(n);
  console.log(myPrimes)
  //Create a copy of n
  var n = n;
  const divisors = [];
  for (let i = 0; i < myPrimes.length; i ++){
    console.log(myPrimes[i]);
    let count = 0;
    if (n%myPrimes[i] == 0){
      while (n%myPrimes[i] == 0){
        count++;
        n /= myPrimes[i];
      }
      divisors.push(count);
      //console.log("pushed "  + myPrimes[i] );
    } else {
      divisors.push(0);
    }
  }
  return divisors;
}


function smallestCommons(arr) {
  //order the array min and max
  let min, max = 0;
  if (arr[0]>arr[1]){
    max = arr[0];
    min = arr[1]
  } else {
    max = arr[1];
    min = arr[0]
  }
  console.log(min, max);
  //create an array with the full range
  var fullRange = [];
  for (let i = min; i = max; i++){
    fullRange.push(i);
  }
  console.log(fullRange)
  return arr;
}

smallestCommons([1,5]);