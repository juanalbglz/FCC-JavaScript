
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
  //[x] No properties should be added. Object.keys(bob).length should always return 6.
  //[x] bob instanceof Person should return true.
  //[x] bob.firstName should return undefined.
  //[x] bob.lastName should return undefined.
  //[x] bob.getFirstName() should return the string Bob.
  //[x] bob.getLastName() should return the string Ross.
  //[x] bob.getFullName() should return the string Bob Ross.
  //[x] bob.getFullName() should return the string Haskell Ross after bob.setFirstName("Haskell").
  //[x] bob.getFullName() should return the string Haskell Curry after bob.setLastName("Curry").
  //[x] bob.getFullName() should return the string Haskell Curry after bob.setFullName("Haskell Curry").
  //[x] bob.getFirstName() should return the string Haskell after bob.setFullName("Haskell Curry").
  //[x] bob.getLastName() should return the string Curry after bob.setFullName("Haskell Curry").
  

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
    return firstAndLast;
  };
  this.getFirstName = function(){
    return firstAndLast.split(" ")[0]
  };
  this.getLastName = function(){
    return firstAndLast.split(" ")[1]
  };
  this.setFirstName = function(firstName){
    firstAndLast = firstName + " " +firstAndLast.split(" ")[1];
    return firstAndLast;
  }
  this.setLastName = function(lastName){
    firstAndLast = firstAndLast.split(" ")[0]+ " " + lastName;
  }
  this.setFullName = function(fullName){
    firstAndLast = fullName;
  }
  return firstAndLast;
};

const bob = new Person('Bob Ross');
console.log(bob.getFullName());
console.log(bob instanceof Person);
console.log(bob.firstname)
console.log(bob.lastname)
console.log(bob.getFirstName());
console.log(bob.getLastName());
console.log(bob.getFullName());
bob.setFirstName("Haskell")
console.log(bob.getFullName());
bob.setLastName("Curry");
console.log(bob.getFullName());
bob.setFullName("Haskell Curry");
console.log(bob.getFirstName());
console.log(bob.getLastName());
console.log(bob.getFullName());

