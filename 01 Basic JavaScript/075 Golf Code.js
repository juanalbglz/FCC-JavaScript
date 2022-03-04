/*
Title:  Golf Code
URL:    https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/golf-code
*/

/* EXAMPLE



*/

/* EXERCISE

In the game of golf, each hole has a par, meaning, the average number of strokes a golfer is expected to make in order to sink the ball in the hole to complete the play. Depending on how far above or below par your strokes are, there is a different nickname.

Your function will be passed par and strokes arguments. Return the correct string according to this table which lists the strokes in order of priority; top (highest) to bottom (lowest):

Strokes	Return
1	"Hole-in-one!"
<= par - 2	"Eagle"
par - 1	"Birdie"
par	"Par"
par + 1	"Bogey"
par + 2	"Double Bogey"
>= par + 3	"Go Home!"
par and strokes will always be numeric and positive. We have added an array of all the names for your convenience.
*/

//[x] golfScore(4, 1) should return the string Hole-in-one!
//[x] golfScore(4, 2) should return the string Eagle
//[x] golfScore(5, 2) should return the string Eagle
//[x] golfScore(4, 3) should return the string Birdie
//[x] golfScore(4, 4) should return the string Par
//[x] golfScore(1, 1) should return the string Hole-in-one!
//[x] golfScore(5, 5) should return the string Par
//[x] golfScore(4, 5) should return the string Bogey
//[x] golfScore(4, 6) should return the string Double Bogey
//[x] golfScore(4, 7) should return the string Go Home!
//[x] golfScore(5, 9) should return the string Go Home!



/* Initial content
const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  // Only change code below this line


  return "Change Me";
  // Only change code above this line
}

golfScore(5, 4);
*/

/* Solution */
const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  // Only change code below this line
  let index;
  if (strokes == 1){
    index = 0;
  } else if (strokes <= par-2){
    index = 1;
  } else if (strokes == par-1){
    index = 2;
  } else if (strokes == par){
    index = 3;
  } else if (strokes == par+1){
    index = 4;
  } else if (strokes == par+2){
    index = 5;
  } else if (strokes >= par+3){
    index = 6;
  }
  return names[index];
  // Only change code above this line
}

golfScore(5, 4);