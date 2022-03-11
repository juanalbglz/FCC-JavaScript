/*
  Title:  Generate an Array of All Object Keys with Object.keys()
  URL:    https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/generate-an-array-of-all-object-keys-with-object-keys
*/

/* Example
  We can also generate an array which contains all the keys stored in an object using the Object.keys() method and passing in an object as the argument. This will return an array with strings representing each property in the object. Again, there will be no specific order to the entries in the array.
*/


/* Exercise*/
  //COMPLETE Finish writing the getArrayOfUsers function so that it returns an array containing all the properties in the object it receives as an argument.

  //[x] The users object should only contain the keys Alan, Jeff, Sarah, and Ryan
  //[x] The getArrayOfUsers function should return an array which contains all the keys in the users object


/* Initial content
  let users = {
    Alan: {
      age: 27,
      online: false
    },
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: false
    },
    Ryan: {
      age: 19,
      online: true
    }
  };

  function getArrayOfUsers(obj) {
    // Only change code below this line

    // Only change code above this line
  }

  console.log(getArrayOfUsers(users));
*/


/* Solution */

let users = {
  Alan: {
    age: 27,
    online: false
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: false
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function getArrayOfUsers(obj) {
  // Only change code below this line
  return Object.keys(obj);
  // Only change code above this line
}

console.log(getArrayOfUsers(users));