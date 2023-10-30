const readlineSync = require("readline-sync") // npm install readline-sync
const Story = require("./story.js");
const Endings = require("./endings.js");
const Art = require("./art.js");

const WPMSpeed = 20; // change this to change the reading speed - a value of 20 is 3 seconds
let lineTimeout;

console.clear();

Start();

async function PlayPart(index) {
      try {
            const { text, choices } = Story[index];

            for (const line of text) {
                  console.log(line);
                  await new Promise(resolve => setTimeout(resolve, lineTimeout));
            }

            const choiceKeys = Object.keys(choices);
            const userAnswer = readlineSync.keyInSelect(choiceKeys, '');

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
            // something went wrong trying to play a story part
            // this means there is a flaw in the story, something leads to nothing!
            console.log('Seems like a 4D wormhole sucked up the story, so it cannot continue!');
      }
}

async function PlayEnding(index) {
      const text = Endings[index];

      for (const line of text) {
            console.log(line);
            await new Promise(resolve => setTimeout(resolve, lineTimeout));
      }
}

async function Start() {
      lineTimeout = (60 / WPMSpeed) * 1000;

      console.log(`Your text will be displayed at a speed that you can read at ${WPMSpeed} WPM.`);
      console.log(`The delay between lines will be approximately ${lineTimeout.toFixed(1) / 1000} seconds.`);
      console.log(`The story will begin in 3 seconds.`);
      await new Promise(resolve => setTimeout(resolve, 3000));

      console.log(Art.Title);
      PlayPart(0);
}