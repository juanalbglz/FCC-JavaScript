/*
Title:  Handle a Rejected Promise with catch
URL:    https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/handle-a-rejected-promise-with-catch
*/

/* Example
  catch is the method used when your promise has been rejected. It is executed immediately after a promise's reject method is called. Here’s the syntax:

    myPromise.catch(error => {
      
    });
  error is the argument passed in to the reject method.
*/


/* Exercise*/
  //COMPLETE Add the catch method to your promise. Use error as the parameter of its callback function and log error to the console.

  //[x] You should call the catch method on the promise.
  //[x] Your catch method should have a callback function with error as its parameter.
  //[x] You should log error to the console.


/* Initial content
  const makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer is set to false to represent an unsuccessful response from a server
    let responseFromServer = false;
      
    if(responseFromServer) {
      resolve("We got the data");
    } else {  
      reject("Data not received");
    }
  });

  makeServerRequest.then(result => {
    console.log(result);
  });
*/


/* Solution */
const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer is set to false to represent an unsuccessful response from a server
  let responseFromServer = false;
    
  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});

makeServerRequest.then(result => {
  console.log(result);
});
makeServerRequest.catch(error =>{
  console.log(error);
});