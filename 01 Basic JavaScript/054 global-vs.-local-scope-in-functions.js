/*
Title:  Global vs. Local Scope in Functions
URL:    https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/global-vs--local-scope-in-functions
*/

/* EXAMPLE

It is possible to have both local and global variables with the same name. When you do this, the local variable takes precedence over the global variable.

In this example:

  const someVar = "Hat";

  function myFun() {
    const someVar = "Head";
    return someVar;
  }

The function myFun will return the string Head because the local version of the variable is present.

*/

/* Exercise*/
//COMPLETE Add a local variable to myOutfit function to override the value of outerWear with the string sweater.


//[x] You should not change the value of the global outerWear.

//[x] myOutfit should return the string sweater.
//[x] You should not change the return statement.

/* Initial content
  // Setup
  const outerWear = "T-Shirt";

  function myOutfit() {
    // Only change code below this line

    // Only change code above this line
    return outerWear;
  }

  myOutfit();
*/


/* Solution */
// Setup
const outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
  let outerWear = "sweater";
  // Only change code above this line
  return outerWear;
}

myOutfit();