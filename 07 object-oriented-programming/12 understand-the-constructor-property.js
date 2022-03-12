/*
Title:  Understand the Constructor Property
URL:    https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/understand-the-constructor-property
*/

/* Example
There is a special constructor property located on the object instances duck and beagle that were created in the previous challenges:

  let duck = new Bird();
  let beagle = new Dog();

  console.log(duck.constructor === Bird); 
  console.log(beagle.constructor === Dog);
Both of these console.log calls would display true in the console.

Note that the constructor property is a reference to the constructor function that created the instance. The advantage of the constructor property is that it's possible to check for this property to find out what kind of object it is. Here's an example of how this could be used:

function joinBirdFraternity(candidate) {
  if (candidate.constructor === Bird) {
    return true;
  } else {
    return false;
  }
}
Note: Since the constructor property can be overwritten (which will be covered in the next two challenges) it’s generally better to use the instanceof method to check the type of an object.
*/

/* Exercise
TODO Write a joinDogFraternity function that takes a candidate parameter and, using the constructor property, return true if the candidate is a Dog, otherwise return false.
*/

/* Initial content
  function Dog(name) {
    this.name = name;
  }

  // Only change code below this line
  function joinDogFraternity(candidate) {

  }
*/

/* Solution */
function Dog(name) {
  this.name = name;
}

// Only change code below this line
function joinDogFraternity(candidate) {
  return (candidate.constructor == Dog)? true : false;  
  }
