
/*
Title:  Delete Properties from a JavaScript Objects
URL:    https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/delete-properties-from-a-javascript-object
*/

/* EXAMPLE

We can also delete properties from objects like this:

delete ourDog.bark;
Example:

  const ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"],
    "bark": "bow-wow"
  };

delete ourDog.bark;
After the last line shown above, ourDog looks like:

  {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
  }

*/

/* EXERCISE
  Delete the tails property from myDog. You may use either dot or bracket notation.
*/

//[x] YYou should delete the property tails from myDog..
//[x] You should not modify the myDog setup.


/* Initial content
// Setup
const myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"],
  "bark": "woof"
};

// Only change code below this line
*/

/* Solution */
// Setup
const myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"],
  "bark": "woof"
};

// Only change code below this line
delete myDog.tails;