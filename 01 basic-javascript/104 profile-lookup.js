/*
  Title:  Profile Lookup
  URL:    https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/profile-lookup
*/

/* Exercise

  We have an array of objects representing different people in our contacts lists.

  A lookUpProfile function that takes name and a property (prop) as arguments has been pre-written for you.

  The function should check if name is an actual contact's firstName and the given property (prop) is a property of that contact.

  If both are true, then return the "value" of that property.

  If name does not correspond to any contacts then return the string No such contact.

  If prop does not correspond to any valid properties of a contact found to match name then return the string No such property.

*/

//[x] lookUpProfile("Kristian", "lastName") should return the string Vos
//[x] lookUpProfile("Sherlock", "likes") should return ["Intriguing Cases", "Violin"]
//[x] lookUpProfile("Harry", "likes") should return an array
//[x] lookUpProfile("Bob", "number") should return the string No such contact
//[x] lookUpProfile("Bob", "potato") should return the string No such contact
//[x] lookUpProfile("Akira", "address") should return the string No such property


/* Initial content
  // Setup
  const contacts = [
    {
      firstName: "Akira",
      lastName: "Laine",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
      firstName: "Harry",
      lastName: "Potter",
      number: "0994372684",
      likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
      firstName: "Sherlock",
      lastName: "Holmes",
      number: "0487345643",
      likes: ["Intriguing Cases", "Violin"],
    },
    {
      firstName: "Kristian",
      lastName: "Vos",
      number: "unknown",
      likes: ["JavaScript", "Gaming", "Foxes"],
    },
  ];

  function lookUpProfile(name, prop) {
    // Only change code below this line

    // Only change code above this line
  }

  lookUpProfile("Akira", "likes");

*/


/* Solution */
// Setup
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  // Only change code below this line
  let found = false;
  let contact;
  for (let element of contacts){
    if (element.firstName == name){
      found = true;
      contact = element;
    }
  }
  if (!found){return "No such contact"}
  if (contact.hasOwnProperty(prop)){
    return contact[prop];
  } else {
    return "No such property";
  }
  // Only change code above this line
}

lookUpProfile("Akira", "likes");