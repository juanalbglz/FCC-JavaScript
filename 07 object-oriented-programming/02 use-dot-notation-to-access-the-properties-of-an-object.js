/*
Title:  Use Dot Notation to Access the Properties of an Objets
URL:    https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/use-dot-notation-to-access-the-properties-of-an-object
*/

/* Example
The last challenge created an object with various properties. Now you'll see how to access the values of those properties. Here's an example:

  let duck = {
    name: "Aflac",
    numLegs: 2
  };
  console.log(duck.name);

  Dot notation is used on the object name, duck, followed by the name of the property, name, to access the value of Aflac.
*/

/* Exercise
TODO Print both properties of the dog object to your console..
*/

/* Initial content

  let dog = {
    name: "Spot",
    numLegs: 4
  };
  // Only change code below this line
*/

/* Solution */
let dog = {
  name: "Spot",
  numLegs: 4
};
console.log(dog.name, dog.numLegs);