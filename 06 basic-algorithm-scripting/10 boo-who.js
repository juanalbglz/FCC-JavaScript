/*
  URL:    https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/boo-who
  Title:  Boo who
*/

/* Example

*/


/* Exercise*/
  //COMPLETE Check if a value is classified as a boolean primitive. Return true or false. Boolean primitives are true and false.
  
  //[x] booWho(true) should return true.
  //[x] booWho(false) should return true.
  //[x] booWho([1, 2, 3]) should return false.
  //[x] booWho([].slice) should return false.
  //[x] booWho({ "a": 1 }) should return false.
  //[x] booWho(1) should return false.
  //[x] booWho(NaN) should return false.
  //[x] booWho("a") should return false.
  //[x] booWho("true") should return false.
  //[x] booWho("false") should return false.


/* Initial content
  function booWho(bool) {
    return bool;
  }

  booWho(null);
*/


/* Solution */
function booWho(bool) {
  return (typeof bool === 'boolean');
}

console.log(booWho(true));
