/*
Title:  Convert HTML Entities
URL:    https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/convert-html-entities
*/

/* Example

*/


/* Exercise*/
//TODO Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.


/* Initial content
function convertHTML(str) {
  return str;
}

convertHTML("Dolce & Gabbana");
*/


/* Solution */
function convertHTML(str) {
  let regex = [/&/g, /</g, />/g, /\'/g, /\"/g];
  let regval = ["&amp;", "&lt;", "&gt;", "&apos;", "&quot;"];
  let i=0;
  for (let rex of regex){
    str=str.replace(rex, regval[i]);
    i++;
  }
	return str
}

convertHTML("Dolce & Gabbana");
convertHTML("Hamburgers < Pizza < Tacos")
convertHTML('Stuff in "quotation marks"')