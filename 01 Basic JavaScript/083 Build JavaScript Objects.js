
/*
Title:  Build JavaScript Objects
URL:    https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/build-javascript-objects
*/

/* EXAMPLE

You may have heard the term object before.

Objects are similar to arrays, except that instead of using indexes to access and modify their data, you access the data in objects through what are called properties.

Objects are useful for storing data in a structured way, and can represent real world objects, like a cat.

Here's a sample cat object:

  const cat = {
    "name": "Whiskers",
    "legs": 4,
    "tails": 1,
    "enemies": ["Water", "Dogs"]
  };
In this example, all the properties are stored as strings, such as name, legs, and tails. However, you can also use numbers as properties. You can even omit the quotes for single-word string properties, as follows:

  const anotherObject = {
    make: "Ford",
    5: "five",
    "model": "focus"
  };
However, if your object has any non-string properties, JavaScript will automatically typecast them as strings.


*/

/* EXERCISE
  Make an object that represents a dog called myDog which contains the properties name (a string), legs, tails and friends.

  You can set these object properties to whatever values you want, as long as name is a string, legs and tails are numbers, and friends is an array.
*/

//[x] myDog should contain the property name and it should be a string.
//[x] myDog should contain the property legs and it should be a number
//[x] myDog should contain the property tails and it should be a number
//[x] myDog should contain the property friends and it should be an array
//[x] myDog should only contain all the given properties


/* Initial content
const myDog = {
  // Only change code below this line


  // Only change code above this line
};
*/

/* Solution */
const myDog = {
  // Only change code below this line
  name: "name",
  legs: 4,
  tails: 1,
  friends: ["Mike", "Me"],
  // Only change code above this line
};