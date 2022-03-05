/*
Title:  Return a Value from a Function with Return
URL:    https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/return-a-value-from-a-function-with-return
*/

/* EXAMPLE

Variables which are declared within a function, as well as the function parameters, have local scope. That means they are only visible within that function.

Here is a function myTest with a local variable called loc.

  function myTest() {
    const loc = "foo";
    console.log(loc);
  }

  myTest();
  console.log(loc);
The myTest() function call will display the string foo in the console. The console.log(loc) line (outside of the myTest function) will throw an error, as loc is not defined outside of the function.
*/

/* Exercise*/
//COMPLETE The editor has two console.logs to help you see what is happening. Check the console as you code to see how it changes. Declare a local variable myVar inside myLocalScope and run the tests.

//NOTE: The console will still display ReferenceError: myVar is not defined, but this will not cause the tests to fail.

//[x] The code should not contain a global myVar variable.
//[x] You should add a local myVar variable.

/* Initial content
  function myLocalScope() {
    // Only change code below this line

    console.log('inside myLocalScope', myVar);
  }
  myLocalScope();

  // Run and check the console
  // myVar is not defined outside of myLocalScope
  console.log('outside myLocalScope', myVar);
  }
*/


/* Solution */
function myLocalScope() {
  // Only change code below this line
  let myVar;
  console.log('inside myLocalScope', myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
console.log('outside myLocalScope', myVar);