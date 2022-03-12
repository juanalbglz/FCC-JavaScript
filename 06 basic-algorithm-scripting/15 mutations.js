/*
  URL:    https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/mutations
  Title:  Mutations
*/

/* Example

*/


/* Exercise*/
  //COMPLETE Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array. For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case. The arguments ["hello", "hey"] should return false because the string hello does not contain a y. Lastly, ["Alien", "line"], should return true because all of the letters in line are present in Alien.
  //NOTE 
  //[x] mutation(["hello", "hey"]) should return false.
  //[x] mutation(["hello", "Hello"]) should return true.
  //[x] mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]) should return true.
  //[x] mutation(["Mary", "Army"]) should return true.
  //[x] mutation(["Mary", "Aarmy"]) should return true.
  //[x] mutation(["Alien", "line"]) should return true.
  //[x] mutation(["floor", "for"]) should return true.
  //[x] mutation(["hello", "neo"]) should return false.
  //[x] mutation(["voodoo", "no"]) should return false.
  //[x] mutation(["ate", "date"]) should return false.
  //[x] mutation(["Tiger", "Zebra"]) should return false.
  //[x] mutation(["Noel", "Ole"]) should return true.


/* Initial content
  function mutation(arr) {
    return arr;
  }

  mutation(["hello", "hey"]);
*/


/* Solution */
function mutation(arr) {
  for (let char of arr[1]){
    let reg = new RegExp(`${char}`, "i");
    if (!reg.test(arr[0])){
      return false;
    }
  }
  return true;
}

console.log(mutation(["hello", "hey"]));
