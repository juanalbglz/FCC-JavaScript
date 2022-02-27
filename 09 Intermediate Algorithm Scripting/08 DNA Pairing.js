/*
Title:  DNA Pairing
URL:    https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/dna-pairing
*/

/* Example

*/


/* Exercise*/
//TODO The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

//TODO Base pairs are a pair of AT and CG. Match the missing element to the provided character.

//TODO Return the provided character as the first element in each array.

//TODO For example, for the input GCG, return [["G", "C"], ["C","G"], ["G", "C"]]

//TODO The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.


/* Initial content
  function pairElement(str) {
    return str;
  }

  pairElement("GCG");
*/


/* Solution */
function pairElement(str) {
  const DNAArr = [];
  for (let char of str){
    let pair = "";
    switch (char){
      case 'C':
        pair = 'G';
        break;
      case 'G':
        pair = 'C';
        break;
      case 'A':
        pair = 'T';
        break;
      case 'T':
        pair = 'A';
        break;
    }
    DNAArr.push([char, pair]);
  }
  return DNAArr;
}

pairElement("GCG");