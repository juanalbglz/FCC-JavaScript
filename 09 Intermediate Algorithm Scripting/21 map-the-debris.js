/*
Title:  Map the Debris
URL:    https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/map-the-debris
*/

/* Example
https://en.wikipedia.org/wiki/Orbital_period
*/


/* Exercise*/
//COMPLETE Return a new array that transforms the elements' average altitude into their orbital periods (in seconds).
//COMPLETE The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.
//COMPLETE You can read about orbital periods on Wikipedia.
//COMPLETE The values should be rounded to the nearest whole number. The body being orbited is Earth.
//COMPLETE The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.
//[x] orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]) should return [{name: "sputnik", orbitalPeriod: 86400}].

//[x] orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]) should return [{name : "iss", orbitalPeriod: 5557}, {name: "hubble", orbitalPeriod: 5734}, {name: "moon", orbitalPeriod: 2377399}].


/* Initial content
function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  return arr;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
*/


/* Solution */
function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  return arr.map(({name, avgAlt}) => { 
    const orbitalPeriod = Math.round(2 * Math.PI * Math.pow((Math.pow((earthRadius + avgAlt), 3)/GM), 0.5));
    return {name, orbitalPeriod};
  });
}

console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]));

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
// returns [{name: "sputnik", orbitalPeriod: 86400}]
orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]) 
//returns [{name : "iss", orbitalPeriod: 5557}, {name: "hubble", orbitalPeriod: 5734}, {name: "moon", orbitalPeriod: 2377399}]