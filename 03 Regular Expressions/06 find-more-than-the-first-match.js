/*
Title:  Find More Than the First Match
URL:    https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/find-more-than-the-first-match
*/

/* Example
  So far, you have only been able to extract or search a pattern once.

    let testStr = "Repeat, Repeat, Repeat";
    let ourRegex = /Repeat/;
    testStr.match(ourRegex);
  Here match would return ["Repeat"].

  To search or extract a pattern more than once, you can use the g flag.

    let repeatRegex = /Repeat/g;
    testStr.match(repeatRegex);
  And here match returns the value ["Repeat", "Repeat", "Repeat"]
*/


/* Exercise*/
//COMPLETE Using the regex starRegex, find and extract both Twinkle words from the string twinkleStar.
//NOTE: You can have multiple flags on your regex like /search/gi
//[x] Your regex starRegex should use the global flag g
//[x] Your regex starRegex should use the case insensitive flag i
//[x] Your match should match both occurrences of the word Twinkle
//[x] Your match result should have two elements in it.


/* Initial content
  let twinkleStar = "Twinkle, twinkle, little star";
  let starRegex = /change/; // Change this line
  let result = twinkleStar; // Change this line
*/


/* Solution */
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /change/; // Change this line
let result = twinkleStar; // Change this line