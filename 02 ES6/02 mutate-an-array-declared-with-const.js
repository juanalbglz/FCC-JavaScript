/*
Title:  Mutate an Array Declared with const
URL:    https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/mutate-an-array-declared-with-const
*/

/* Example
  If you are unfamiliar with const, check out this challenge.

  The const declaration has many use cases in modern JavaScript.

  Some developers prefer to assign all their variables using const by default, unless they know they will need to reassign the value. Only in that case, they use let.

  However, it is important to understand that objects (including arrays and functions) assigned to a variable using const are still mutable. Using the const declaration only prevents reassignment of the variable identifier.

    const s = [5, 6, 7];
    s = [1, 2, 3];
    s[2] = 45;
    console.log(s);
  s = [1, 2, 3] will result in an error. The console.log will display the value [5, 6, 45].

  As you can see, you can mutate the object [5, 6, 7] itself and the variable s will still point to the altered array [5, 6, 45]. Like all arrays, the array elements in s are mutable, but because const was used, you cannot use the variable identifier s to point to a different array using the assignment operator.
*/


/* Exercise*/
  //COMPLETE An array is declared as const s = [5, 7, 2]. Change the array to [2, 5, 7] using various element assignments.

  //[x] You should not replace const keyword.
  //[x] s should be a constant variable (by using const)
  //[x] You should not change the original array declaration.
  //[x] s should be equal to [2, 5, 7].

/* Initial content
  const s = [5, 7, 2];
  function editInPlace() {
    // Only change code below this line

    // Using s = [2, 5, 7] would be invalid

    // Only change code above this line
  }
  editInPlace();
*/


/* Solution */
const s = [5, 7, 2];
function editInPlace() {
  // Only change code below this line
  let newArray = [2, 5, 7];
  // Using s = [2, 5, 7] would be invalid
  for (let element in s){
    s[element] = newArray[element]
  }
  // Only change code above this line
}
editInPlace();