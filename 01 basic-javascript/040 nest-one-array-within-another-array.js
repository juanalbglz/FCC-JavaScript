/*
Title:  Nest one Array within Another Array
URL:    https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/nest-one-array-within-another-array
*/

/* Example
  You can also nest arrays within other arrays, like below:

    const teams = [["Bulls", 23], ["White Sox", 45]];
  
    This is also called a multi-dimensional array.
*/


/* Exercise*/
//COMPLETE Create a nested array called myArray.
//[x] myArray should have at least one array nested within another array.

/* Initial content
// Only change code below this line
const myArray = [];
*/


/* Solution */
// Only change code below this line
const myArray = [[1], [2]];
console.log(myArray);
console.log(myArray.constructor);
// console.log(myArray.toSource()); seems to not longer work
Array.prototype.listAll = function() {
  for (let property in this) {
    if (this.hasOwnProperty(property)) {
      console.log(property);
    }
  }
};
myArray.listAll();

//IMPORTANT THE ARRAY OBJECT

/*
(2) [Array(1), Array(1)]
  0: [1]
  1: [2]
  length: 2
  [[Prototype]]: Array(0)
      listAll: ƒ ()
      at: ƒ at()
      concat: ƒ concat()
      constructor: ƒ Array()
      from: ƒ from()
      isArray: ƒ isArray()
      length: 1
      name: "Array"
      of: ƒ of()
      prototype: [listAll: ƒ, constructor: ƒ, concat: ƒ, copyWithin: ƒ, fill: ƒ, …]
      Symbol(Symbol.species): ƒ Array()
      Symbol(Symbol.species): ƒ Array()
      arguments: (...)
      caller: (...)
      [[Prototype]]: ƒ ()
      [[Scopes]]: Scopes[0]
      copyWithin: ƒ copyWithin()
      entries: ƒ entries()
      every: ƒ every()
      fill: ƒ fill()
      filter: ƒ filter()
      find: ƒ find()
      findIndex: ƒ findIndex()
      findLast: ƒ findLast()
      findLastIndex: ƒ findLastIndex()
      flat: ƒ flat()
      flatMap: ƒ flatMap()
      forEach: ƒ forEach()
      includes: ƒ includes()
      indexOf: ƒ indexOf()
      join: ƒ join()
      keys: ƒ keys()
      lastIndexOf: ƒ lastIndexOf()
      length: 0
      map: ƒ map()
      pop: ƒ pop()
      push: ƒ push()
      reduce: ƒ reduce()
      reduceRight: ƒ reduceRight()
      reverse: ƒ reverse()
      shift: ƒ shift()
      slice: ƒ slice()
      some: ƒ some()
      sort: ƒ sort()
      splice: ƒ splice()
      toLocaleString: ƒ toLocaleString()
      toString: ƒ toString()
      unshift: ƒ unshift()
      values: ƒ values()
      Symbol(Symbol.iterator): ƒ values()
      Symbol(Symbol.unscopables): {copyWithin: true, entries: true, fill: true, find: true, findIndex: true, …}
      [[Prototype]]: Object
      constructor: ƒ Object()
      hasOwnProperty: ƒ hasOwnProperty()
      isPrototypeOf: ƒ isPrototypeOf()
      propertyIsEnumerable: ƒ propertyIsEnumerable()
      toLocaleString: ƒ toLocaleString()
      toString: ƒ toString()
      valueOf: ƒ valueOf()
      __defineGetter__: ƒ __defineGetter__()
      __defineSetter__: ƒ __defineSetter__()
      __lookupGetter__: ƒ __lookupGetter__()
      __lookupSetter__: ƒ __lookupSetter__()
      __proto__: (...)
      get __proto__: ƒ __proto__()
      set __proto__: ƒ __proto__()
*/