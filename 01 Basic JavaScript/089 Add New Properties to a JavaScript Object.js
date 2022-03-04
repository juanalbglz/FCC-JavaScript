
/*
Title:  Add New Properties to JavaScript Objects
URL:    https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/updating-object-properties
*/

/* EXAMPLE

You can add new properties to existing JavaScript objects the same way you would modify them.

Here's how we would add a bark property to ourDog:

ourDog.bark = "bow-wow";
or

ourDog["bark"] = "bow-wow";
Now when we evaluate ourDog.bark, we'll get his bark, bow-wow.

Example:

const ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};

ourDog.bark = "bow-wow";

*/

/* EXERCISE
  Add a bark property to myDog and set it to a dog sound, such as "woof". You may use either dot or bracket notation.
*/

//[x] You should add the property bark to myDog.
//[x] You should not add bark to the initialization of myDog.


/* Initial content
const myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};


*/

/* Solution */
const myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};
myDog.bark = "guau guau"