const readlineSync = require("readline-sync")
const Art = require("./art.js");

console.clear();
console.log(Art.HudBorder);

function addSpaces(txt, len){
   let output = txt.toString();
   while(output.length < len){
      output += ' ';
   }
   return output;
}