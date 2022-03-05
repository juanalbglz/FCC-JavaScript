
/*
  Title:  Iterate with JavaScript While Loops
  URL:    https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/iterate-with-javascript-while-loops
*/


/* EXAMPLE
  You can run the same code multiple times by using a loop.

  The first type of loop we will learn is called a while loop because it runs while a specified condition is true and stops once that condition is no longer true.

    const ourArray = [];
    let i = 0;

    while (i < 5) {
      ourArray.push(i);
      i++;
    }
  In the code example above, the while loop will execute 5 times and append the numbers 0 through 4 to ourArray.

  Let's try getting a while loop to work by pushing values to an array.
*/


/* EXERCISE

  Add the numbers 5 through 0 (inclusive) in descending order to myArray using a while loop.

*/

//[x] You should be using a while loop for this.
//[x] myArray should equal [5, 4, 3, 2, 1, 0].


/* INITIAL CONTENT
  // Setup
  const myArray = [];

  // Only change code below this line
*/

/* EXERCISE*/
// Setup
const myArray = [];

// Only change code below this line
let i = 5;
while (i>-1){
  myArray.push(i);
  i--;
}