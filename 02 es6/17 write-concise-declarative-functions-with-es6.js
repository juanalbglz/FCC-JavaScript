/*
Title:  Write Concise Declarative Functions with ES6
URL:    https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/write-concise-declarative-functions-with-es6
*/

/* Example
  When defining functions within objects in ES5, we have to use the keyword function as follows:

    const person = {
      name: "Taylor",
      sayHello: function() {
        return `Hello! My name is ${this.name}.`;
      }
    };
  With ES6, you can remove the function keyword and colon altogether when defining functions in objects. Here's an example of this syntax:

    const person = {
      name: "Taylor",
      sayHello() {
        return `Hello! My name is ${this.name}.`;
      }
    };
*/


/* Exercise*/
  //COMPLETE Refactor the function setGear inside the object bicycle to use the shorthand syntax described above. 
  //[x] Traditional function expression should not be used.
  //[x] setGear should be a declarative function.
  //[x] bicycle.setGear(48) should change the gear value to 48.


/* Initial content
  // Only change code below this line
  const bicycle = {
    gear: 2,
    setGear: function(newGear) {
      this.gear = newGear;
    }
  };
  // Only change code above this line
  bicycle.setGear(3);
  console.log(bicycle.gear);
*/


/* Solution */
// Only change code below this line
const bicycle = {
  gear: 2,
  setGear(newGear) {
    this.gear = newGear;
  }
};
// Only change code above this line
bicycle.setGear(3);
console.log(bicycle.gear);