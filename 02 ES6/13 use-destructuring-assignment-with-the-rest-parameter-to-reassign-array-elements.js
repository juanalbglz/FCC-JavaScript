/*
Title:  Use Destructuring Assignment with the Rest Parameter to Reassign Array Elements
URL:    https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/use-destructuring-assignment-with-the-rest-parameter-to-reassign-array-elements
*/

/* Example
  In some situations involving array destructuring, we might want to collect the rest of the elements into a separate array.

  The result is similar to Array.prototype.slice(), as shown below:

  const [a, b, ...arr] = [1, 2, 3, 4, 5, 7];
  console.log(a, b);
  console.log(arr);
  The console would display the values 1, 2 and [3, 4, 5, 7].

  Variables a and b take the first and second values from the array. After that, because of the rest parameter's presence, arr gets the rest of the values in the form of an array. The rest element only works correctly as the last variable in the list. As in, you cannot use the rest parameter to catch a subarray that leaves out the last element of the original array.


*/


/* Exercise*/
  //COMPLETE Use destructuring assignment with the rest parameter to perform an effective Array.prototype.slice() so that arr is a sub-array of the original array source with the first two elements omitted.
  //[x] arr should be [3,4,5,6,7,8,9,10]
  //[x] source should be [1,2,3,4,5,6,7,8,9,10]
  //[x] Array.slice() should not be used.
  //[x] Destructuring on list should be used.


/* Initial content
  const source = [1,2,3,4,5,6,7,8,9,10];
  function removeFirstTwo(list) {
    // Only change code below this line
    const arr = list; // Change this line
    // Only change code above this line
    return arr;
  }
  const arr = removeFirstTwo(source);
*/


/* Solution */
  const source = [1,2,3,4,5,6,7,8,9,10];
  function removeFirstTwo(list) {
    // Only change code below this line
    const arr = [,,,list]; // Change this line
    // Only change code above this line
    return arr;
  }
  const arr = removeFirstTwo(source);

  //BUG: comments are taken in account