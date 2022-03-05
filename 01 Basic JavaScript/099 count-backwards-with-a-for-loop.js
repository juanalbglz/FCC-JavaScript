
/*
  Title:  Iterate Odd Numbers With a For Loops
  URL:    https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/iterate-odd-numbers-with-a-for-loop
*/


/* EXAMPLE

  A for loop can also count backwards, so long as we can define the right conditions.

  In order to decrement by two each iteration, we'll need to change our initialization, condition, and final expression.

  We'll start at i = 10 and loop while i > 0. We'll decrement i by 2 each loop with i -= 2.

  const ourArray = [];

  for (let i = 10; i > 0; i -= 2) {
    ourArray.push(i);
  }
  ourArray will now contain [10, 8, 6, 4, 2]. Let's change our initialization and final expression so we can count backwards by twos to create an array of descending odd numbers.

*/


/* EXERCISE

  Push the odd numbers from 9 through 1 to myArray using a for loop.

*/

//[x] You should be using a for loop for this.
//[x] You should be using the array method push.
//[x] myArray should equal [9, 7, 5, 3, 1].


/* INITIAL CONTENT

    // Setup
    const myArray = [];

    // Only change code below this line

*/

/* EXERCISE*/
  // Setup
  const myArray = [];

  // Only change code below this line
  for (let i = 9; i >= 1; i-=2){
    myArray.push(i)
  }
  console.log(myArray)