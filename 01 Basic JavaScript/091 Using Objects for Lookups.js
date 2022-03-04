
/*
Title:  Using Objects for Lookups
URL:    https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/using-objects-for-lookups
*/

/* EXAMPLE

Objects can be thought of as a key/value storage, like a dictionary. If you have tabular data, you can use an object to lookup values rather than a switch statement or an if/else chain. This is most useful when you know that your input data is limited to a certain range.

Here is an example of a simple reverse alphabet lookup:

  const alpha = {
    1:"Z",
    2:"Y",
    3:"X",
    4:"W",
    ...
    24:"C",
    25:"B",
    26:"A"
  };

  alpha[2];
  alpha[24];

  const value = 2;
  alpha[value];
alpha[2] is the string Y, alpha[24] is the string C, and alpha[value] is the string Y.

*/

/* EXERCISE
  Convert the switch statement into an object called lookup. Use it to look up val and assign the associated string to the result variable.
*/

//[x] phoneticLookup("alpha") should equal the string Adams
//[x] phoneticLookup("bravo") should equal the string Boston
//[x] phoneticLookup("charlie") should equal the string Chicago
//[x] phoneticLookup("delta") should equal the string Denver
//[x] phoneticLookup("echo") should equal the string Easy
//[x] phoneticLookup("foxtrot") should equal the string Frank
//[x] phoneticLookup("") should equal undefined
//[x] You should not modify the return statement
//[x] You should not use case, switch, or if statements

/* Initial content
// Setup
function phoneticLookup(val) {
  let result = "";

  // Only change code below this line
  switch(val) {
    case "alpha":
      result = "Adams";
      break;
    case "bravo":
      result = "Boston";
      break;
    case "charlie":
      result = "Chicago";
      break;
    case "delta":
      result = "Denver";
      break;
    case "echo":
      result = "Easy";
      break;
    case "foxtrot":
      result = "Frank";
  }

  // Only change code above this line
  return result;
}

phoneticLookup("charlie");
*/

/* Solution */
// Setup
function phoneticLookup(val) {
  let result = "";

  // Only change code below this line
  const lookup = {
    'alpha': "Adams",
    'bravo': "Boston",
    'charlie': "Chicago",
    'delta': "Denver",
    'echo': "Easy",
    'foxtrot': "Frank",
  }
  result = lookup[val];
  // Only change code above this line
  return result;
}

phoneticLookup("charlie");