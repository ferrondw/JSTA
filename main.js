const readlineSync = require("readline-sync") // npm install readline-sync
const Story = require("./story.js");
const Endings = require("./endings.js");

console.clear();
PlayPart(0);

async function PlayPart(index) {
      const { text, choices } = Story[index];

      for (const line of text) {
            console.log(line);
            await new Promise(resolve => setTimeout(resolve, 1000)); // 1 second delay
      }

      const choiceKeys = Object.keys(choices);
      const userAnswer = readlineSync.keyInSelect(choiceKeys, 'Make your choice:\n');

      const nextStoryPart = choices[choiceKeys[userAnswer]];

      //check for endings
      //ok explanation i check if the index of the choice is an int, if its not that means its an ending, i name an ending 'e' followed by an index. I slice the 'e' off the index, parse the int and then use that index for the endings in endings.js its not at all pretty but it works really well
      if (!parseInt(nextStoryPart)) {
            PlayEnding(parseInt(nextStoryPart.slice(1)));
            return;
      }

      //play the next part of the story based on the users choice
      PlayPart(nextStoryPart);
}

async function PlayEnding(index) {
      const text = Endings[index];

      for (const line of text) {
            console.log(line);
            await new Promise(resolve => setTimeout(resolve, 1000)); // 1 second delay
      }
}