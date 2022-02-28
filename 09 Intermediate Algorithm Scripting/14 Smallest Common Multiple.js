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

function factorize(num){
  //base value
  let base = num;
  //num factorization
  let factorized = [];
  
  // start dividing by prime numbers smaller than base
  while (base > 1) {
    for (let i = base; i > 1; i--){
      if (prime(i) && base%i==0){
        factorized.push(i)
        base /= i;
      }
    }
  }
  factorized.push(1)
  return factorized;  
}

function smallestCommons(arr) {
  return arr;
}

smallestCommons([1,5]);