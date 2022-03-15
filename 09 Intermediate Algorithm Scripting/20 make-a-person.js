/*
  URL:    https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/make-a-person
  Title:  String
*/

/* Example

*/


/* Exercise*/
  //COMPLETE Fill in the object constructor with the following methods below:
/*
  getFirstName()
  getLastName()
  getFullName()
  setFirstName(first)
  setLastName(last)
  setFullName(firstAndLast)
*/

  //NOTE Run the tests to see the expected output for each method. The methods that take an argument must accept only one argument and it has to be a string. These methods must be the only available means of interacting with the object.
  //[x] 
  //[x] 
  //[x] 


/* Initial content
  const Person = function(firstAndLast) {
    // Only change code below this line
    // Complete the method below and implement the others similarly
    this.getFullName = function() {
      return "";
    };
    return firstAndLast;
  };

  const bob = new Person('Bob Ross');
  bob.getFullName();
*/


/* Solution */
const Person = function(firstAndLast) {
  // Only change code below this line
  // Complete the method below and implement the others similarly
  this.getFullName = function() {
    return "";
  };
  return firstAndLast;
};

const bob = new Person('Bob Ross');
bob.getFullName();
