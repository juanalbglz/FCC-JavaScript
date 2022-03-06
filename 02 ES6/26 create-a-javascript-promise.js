/*
Title:  Create a JavaScript Promise
URL:    https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/create-a-javascript-promise
*/

/* Example
  A promise in JavaScript is exactly what it sounds like - you use it to make a promise to do something, usually asynchronously. When the task completes, you either fulfill your promise or fail to do so. Promise is a constructor function, so you need to use the new keyword to create one. It takes a function, as its argument, with two parameters - resolve and reject. These are methods used to determine the outcome of the promise. The syntax looks like this:

    const myPromise = new Promise((resolve, reject) => {

    });
*/


/* Exercise*/
  //COMPLETE Create a new promise called makeServerRequest. Pass in a function with resolve and reject parameters to the constructor.

  //[x] You should assign a promise to a declared variable named makeServerRequest.
  //[x] Your promise should receive a function with resolve and reject as parameters.


/* Initial content

*/


/* Solution */
const makeServerRequest = new Promise((resolve, reject)=> {});