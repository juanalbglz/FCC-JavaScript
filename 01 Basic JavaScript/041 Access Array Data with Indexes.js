/*
Title:  Access Arrau Data with Indexes
URL:    https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/access-array-data-with-indexes
*/

/* Example
We can access the data inside arrays using indexes.

Array indexes are written in the same bracket notation that strings use, except that instead of specifying a character, they are specifying an entry in the array. Like strings, arrays use zero-based indexing, so the first element in an array has an index of 0.


Example

const array = [50, 60, 70];
array[0];
const data = array[1];
array[0] is now 50, and data has the value 60.

Note: There shouldn't be any spaces between the array name and the square brackets, like array [0]. Although JavaScript is able to process this correctly, this may confuse other programmers reading your code.
*/


/* Exercise*/
//COMPLETE Create a variable called myData and set it to equal the first value of myArray using bracket notation.

//[x] The variable myData should equal the first value of myArray.

//[x] The data in variable myArray should be accessed using bracket notation.

/* Initial content
const myArray = [50, 60, 70];
*/


/* Solution */
const myArray = [50, 60, 70];
var myData;                 //IMPORTANT Variable initialisation
myData = myArray[0];        //IMPORTANT Variable assignment
/* Could also have been inistialised and declared in one line as follows:

   var MyData = myArray[0];

   */