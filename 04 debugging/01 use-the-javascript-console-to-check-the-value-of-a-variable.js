/*
  Title:  Use the JavaScript Console to Check the Value of a Variable
  URL:    https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/debugging/use-the-javascript-console-to-check-the-value-of-a-variable
*/

/* Example
  Both Chrome and Firefox have excellent JavaScript consoles, also known as DevTools, for debugging your JavaScript.

  You can find Developer tools in your Chrome's menu or Web Console in Firefox's menu. If you're using a different browser, or a mobile phone, we strongly recommend switching to desktop Firefox or Chrome.

  The console.log() method, which "prints" the output of what's within its parentheses to the console, will likely be the most helpful debugging tool. Placing it at strategic points in your code can show you the intermediate values of variables. It's good practice to have an idea of what the output should be before looking at what it is. Having check points to see the status of your calculations throughout your code will help narrow down where the problem is.

  Here's an example to print the string Hello world! to the console:

  console.log('Hello world!');
*/


/* Exercise*/
  //COMPLETE Use the console.log() method to print the value of the variable a where noted in the code.

  //[x] Your code should use console.log() to check the value of the variable a.



/* Initial content
  let a = 5;
  let b = 1;
  a++;
  // Only change code below this line


  let sumAB = a + b;
  console.log(sumAB);
*/


/* Solution */
let a = 5;
console.log(a);
let b = 1;
a++;
console.log(a);
let sumAB = a + b;
console.log(sumAB);