/*
  Title:  Check if an Object has a Property
  URL:    https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/check-if-an-object-has-a-property
*/

/* Example
  Now we can add, modify, and remove keys from objects. But what if we just wanted to know if an object has a specific property? JavaScript provides us with two different ways to do this. One uses the hasOwnProperty() method and the other uses the in keyword. If we have an object users with a property of Alan, we could check for its presence in either of the following ways:

  users.hasOwnProperty('Alan');
  'Alan' in users;
  Both of these would return true.
*/


/* Exercise*/
  //COMPLETE Finish writing the function so that it returns true if the object passed to it contains all four names, Alan, Jeff, Sarah and Ryan and returns false otherwise.
  //NOTE 
  //[x] The users object should not be accessed directly
  //[x] The users object should only contain the keys Alan, Jeff, Sarah, and Ryan
  //[x] The function isEveryoneHere should return true if Alan, Jeff, Sarah, and Ryan are properties on the object passed to it.
  //[x] The function isEveryoneHere should return false if Alan is not a property on the object passed to it.
  //[x] The function isEveryoneHere should return false if Jeff is not a property on the object passed to it.
  //[x] The function isEveryoneHere should return false if Sarah is not a property on the object passed to it.
  //[x] The function isEveryoneHere should return false if Ryan is not a property on the object passed to it.

/* Initial content
let users = {
  Alan: {
    age: 27,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: true
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function isEveryoneHere(userObj) {
  // Only change code below this line
  
  // Only change code above this line
}

console.log(isEveryoneHere(users));
*/


/* Solution */

let users = {
  Alan: {
    age: 27,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: true
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function isEveryoneHere(userObj) {
  // Only change code below this line
  const names = ['Alan', 'Jeff', 'Sarah', 'Ryan'];
  for (let name of names){
    if (userObj.hasOwnProperty(name) == false){
      return false;
    }
  }
  return true;
  // Only change code above this line
}

console.log(isEveryoneHere(users));