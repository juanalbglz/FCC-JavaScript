/*
Title:  Use Destructuring Assignment to Pass an Object as a Function's Parameters
URL:    https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/use-destructuring-assignment-to-pass-an-object-as-a-functions-parameters
*/

/* Example
In some cases, you can destructure the object in a function argument itself.

Consider the code below:

  const profileUpdate = (profileData) => {
    const { name, age, nationality, location } = profileData;

  }
This effectively destructures the object sent into the function. This can also be done in-place:

  const profileUpdate = ({ name, age, nationality, location }) => {

  }
When profileData is passed to the above function, the values are destructured from the function parameter for use within the function.
*/


/* Exercise*/
  //COMPLETE Use destructuring assignment within the argument to the function half to send only max and min inside the function.
  //[x] stats should be an object.
  //[x] half(stats) should be 28.015
  //[x] Destructuring should be used.
  //[x] Destructured parameter should be used.


/* Initial content
  const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
  };

  // Only change code below this line
  const half = (stats) => (stats.max + stats.min) / 2.0; 
  // Only change code above this line
*/


/* Solution */
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

// Only change code below this line
const half = ({max, min}) => (max + min) / 2.0; 
// Only change code above this line