const readlineSync = require("readline-sync") // npm install readline-sync
const Story = require("./story.js");
const Endings = require("./endings.js");
const Art = require("./art.js");

let sepcialEnding = Math.floor(Math.random() * 10);
const lineTimeout = 1300; // in ms

console.clear();

if (sepcialEnding < 1) {
      PlayEnding(2);
}
else {
      console.log(Art.Title);
      PlayPart(0); // begins the story
}


async function PlayPart(index) {
      try {
            const { text, choices } = Story[index];

            for (const line of text) {
                  console.log(line);
                  await new Promise(resolve => setTimeout(resolve, lineTimeout));
            }

            const choiceKeys = Object.keys(choices);
            const userAnswer = readlineSync.keyInSelect(choiceKeys, 'Make your choice:\n');

            const nextStoryPart = choices[choiceKeys[userAnswer]];

            //check for endings
            if (!parseInt(nextStoryPart)) {
                  PlayEnding(parseInt(nextStoryPart.slice(1)));
                  return;
            }

            //play the next part of the story based on the users choice
            PlayPart(nextStoryPart);
      }
      catch {
            console.log('Seems like a 4D wormhole sucked up the story, so it cannot continue!');
      }
}

async function PlayEnding(index) {
      const text = Endings[index];

      for (const line of text) {
            console.log(line);
            await new Promise(resolve => setTimeout(resolve, 1000)); // 1 second delay
      }
}