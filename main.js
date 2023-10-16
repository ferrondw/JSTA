const readlineSync = require("readline-sync") // npm install readline-sync
const Story = require("./story.js");

console.clear();

async function DisplaySection(lineArray) // dynamically diaplays sections of the story
{
   for (const line of lineArray)
   {
         console.log(line);
         await new Promise(resolve => setTimeout(resolve, 1000)); // in ms: 1 second
   }
}

DisplaySection(Story.Stukje1);