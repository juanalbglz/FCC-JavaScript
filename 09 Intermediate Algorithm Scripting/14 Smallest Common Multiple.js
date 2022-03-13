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
//return array with max and min values of an input array
function orderArr(arr){
  // assign max and min
  if (arr.length == 1){
    return arr;
  } else {
    return([Math.min.apply(null, arr), Math.max.apply(null, arr)])
  }
}

//given an array create all correlative values between its min and max values
function numbersIn(arr){
  let numbers = [];
  let auxArr = orderArr(arr);
  //fill the array from min to max
  for (let i = auxArr[0]; i <=auxArr[1]; i++){
    numbers.push(i)
  }
  return numbers;
}

//check any number if its prime or not
function isPrime(n){
  let prime = true;
  if (n === 1) {
    prime = true;
  } else {
    for (let num = 2; num < n; num++){
      if (n % num == 0){
        prime = false;
      }   
    }
  }
  return prime;
}

//create an object with all primes lower than n
function primeObj(n, obj={}){
  for (let i=1; i <= n; i++){
    isPrime(i)? obj[i]=0:false;
  }
  return obj;
}

//factorize a number
function factorize(n, obj=primeObj(n)){
  let aux = n;
  if (isPrime(aux)){
    obj[aux]=1;
    return obj;
  } else {
    for (let i in obj) {
      if (aux%i==0 && i>1){
        while (aux%i==0 && aux>1){
          aux = aux/i;
          obj[i] += 1;
        }
      }
    }
    obj[1]+= 1;
  }
  return obj;
}


function smallestCommons(arr) {
  //create the span of numbers to treat
  const span = numbersIn(arr);
  //create an object with all prime numbers lower than max
  const factors = primeObj(span[span.length-1]);
  //factorize each number in the span
  for (let n of span){
    //define a temporal object for each n
    let nFactors = factorize(n);
    for (let key in nFactors){
      if (nFactors[key] > factors[key]){
        factors[key] = nFactors[key];
      }
    }    
  }
  let mcm = 1;
  for (let key in factors){
    mcm *= Math.pow(key, factors[key]);
  }
  return mcm;
}