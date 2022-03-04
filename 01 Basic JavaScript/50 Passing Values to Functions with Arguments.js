/*
Title:  Write Reusable JavaScript with Fucntions
URL:    https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/passing-values-to-functions-with-arguments
*/

/* Example
Parameters are variables that act as placeholders for the values that are to be input to a function when it is called. When a function is defined, it is typically defined along with one or more parameters. The actual values that are input (or "passed") into a function when it is called are known as arguments.

Here is a function with two parameters, param1 and param2:

  function testFun(param1, param2) {
    console.log(param1, param2);
  }

Then we can call testFun like this: testFun("Hello", "World");. We have passed two string arguments, Hello and World. Inside the function, param1 will equal the string Hello and param2 will equal the string World. Note that you could call testFun again with different arguments and the parameters would take on the value of the new arguments.


/* Exercise*/
//COMPLETE Create a function called functionWithArgs that accepts two arguments and outputs their sum to the dev console.
//COMPLETE Call the function with two numbers as arguments.

//[x] functionWithArgs should be a function.
//[x] functionWithArgs(1,2) should output 3.
//[x] functionWithArgs(7,9) should output 16.
//[x] You should call functionWithArgs with two numbers after you define it.


/* Solution */
function functionWithArgs(param1, param2){
  console.log(param1 + param2)
}
functionWithArgs(1,2)