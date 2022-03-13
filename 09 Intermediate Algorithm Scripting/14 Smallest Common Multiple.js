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
/* function smallestCommons(arr) {
  //
  function ordered(arr){
    // assign max and min
    let max = Math.max.apply(null, arr);
    let min = Math.min.apply(null, arr);
    return [min, max];
  }
  //order the array


  //build array of numbers
  function numbers(arr){
    //create a new array
    let numbers = [];
    //fill the array from min to max
    for (let i = arr[0]; i <=arr[1]; i++){
      numbers.push(i)
    }
    return numbers;
  }
  let fArr = numbers(oArr);


  //check if a number is prime
  function isPrime(n){
    //1 case as prime
    if (n === 1) {
      return true;
    } else {
      for (let num = 2; num < n; num++){
        //if divisioble by another number not prime
        if (n % num == 0){
          return false;
        }   
      }
    }
    //if after going the for was not prime, then it is prime
    return true;
    }


    //find all primes lower or equal max value
    //if object passed return it, else return object
    function primes(n, obj={}){
      for(let num = 1; num <= n; num++){
        if(isPrime(num)){
          //add obj property
          obj[num] = 0;
        }
      }
      return obj;
    }


    //factorize a number
    //factorize a number
    function factorize(n, obj={}){
      for (let i in obj) {
        if (n%parseInt(i) == 0){
          obj[i]+= 1
        }
      }
      return obj;
    }

    //define ordered array
    console.log(arr);
    const oArr = ordered(arr);    
    console.log(oArr);
    let factors = primes(fArr[fArr.length-1])
    for (let element of fArr){
      factorize(element, factors)
    }
    console.log(factorize(5, factors))
}

smallestCommons([1,5]); */


  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
function smallestCommons(arr) {

  function orderArr(arr){
    // assign max and min
    if (arr.length == 1){
      return arr;
    } else {
      return([Math.min.apply(null, arr), Math.max.apply(null, arr)])
    }
  }

  function numbersIn(arr){
    //create a new array
    let numbers = [];
    //fill the array from min to max
    for (let i = arr[0]; i <=arr[1]; i++){
      numbers.push(i)
    }
    return numbers;
  }

  function isPrime(n){
    //1 case as prime
    if (n === 1) {
      return true;
    } else {
      for (let num = 2; num < n; num++){
        //if divisioble by another number not prime
        if (n % num == 0){
          return false;
        }   
      }
    }
    //if after going the for was not prime, then it is prime
    return true;
  }

  function primeObj(n, obj={}){
    for (let i=1; i <= n; i++){
      isPrime(i)? obj[i]=0:false;
    }
    return obj;
  }

//is only checking once
  function factorize(n, obj=primeObj(n)){
    for (let i in obj) {
      if (n%i == 0){
        obj[i]+=1
        factorize(n/i, obj)
      }
    }
    return obj;
  }
  
  //order the array
  const array = orderArr(arr)
    //console.log(array);
  //get the last value as already ordered
  const max = arr[arr.length-1];
    //console.log(max);
  //create an object with all prime numbers lower than max
  const factors = primeObj(max);
  //create the span of numbers to treat
  const span = numbersIn(array);
    //console.log(span);
  //factorize each number in the span
  for (let n of span){
      //console.log(`n = ${n}`)
    //define a temporal object for each n
    let nFactors = factorize(n);    
      console.log(nFactors, factors)
    //iterate properties in nFactors and add max values to factors object
    const keys = Object.keys(nFactors);
      //console.log(keys)
    keys.forEach((key) => {
    if (nFactors[key] > 0 && nFactors[key] > factors[key]){
      factors[key] = nFactors[key];
    }
    });
  }
    //multiply all values and return the result
    const keys = Object.keys(factors);
    console.log(keys);
    console.log(factors)
    let result = 1;
    keys.forEach((key) => {
      console.log(key,factors[key])
      result *= key*factors[key];
    });
    return result;
    }

  console.log(smallestCommons([1,5]))

//TODO change obj so that is affected the prototype? for primes
//TODO mcm evaluate each property and set only max values
//TODO mcm multiplicate max values of each prime