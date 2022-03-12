/*
Title:  Use a Constructor to Create Objects
URL:    https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/use-a-constructor-to-create-objects
DATE:   2022-02-25
*/

/* Example
Here's the Bird constructor from the previous challenge:

  function Bird() {
    this.name = "Albert";
    this.color  = "blue";
    this.numLegs = 2;
  }

let blueBird = new Bird();
NOTE: this inside the constructor always refers to the object being created.

Notice that the new operator is used when calling a constructor. This tells JavaScript to create a new instance of Bird called blueBird. Without the new operator, this inside the constructor would not point to the newly created object, giving unexpected results. Now blueBird has all the properties defined inside the Bird constructor:

  blueBird.name;
  blueBird.color;
  blueBird.numLegs;
  Just like any other object, its properties can be accessed and modified:

  blueBird.name = 'Elvira';
  blueBird.name;


/* Exercise
TODO Use the Dog constructor from the last lesson to create a new instance of Dog, assigning it to a variable hound.


*/

/* Initial content

  function Dog() {
    this.name = "Rupert";
    this.color = "brown";
    this.numLegs = 4;
  }
  // Only change code below this line
*/

/* Solution */
function Dog() {
  this.name = "Rupert";
  this.color = "brown";
  this.numLegs = 4;
}

// Only change code below this line
var hound = new Dog();

//FIXME It takes account of comments on the code area, so it doesn't really evaluate your running code but all the text.