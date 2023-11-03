const readlineSync = require("readline-sync") // npm install readline-sync

const Story = require("./story.js");
const Endings = require("./endings.js");
const Art = require("./art.js");

const letterDelay = 0.06;
const sentenceDelay = 0.5;

Start();

async function PlayPart(index) {
      try {
            const { text, choices } = Story[index];

            for (const line of text) {
                  for(const word of line.split('')){
                        process.stdout.write(`${word}`);
                        await new Promise(resolve => setTimeout(resolve, letterDelay * 1000));
                  }
                  process.stdout.write("\n")
                  await new Promise(resolve => setTimeout(resolve, sentenceDelay * 1000));
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
            // this means there is a flaw in the story file, something leads to nothing!
            console.log('Seems like a wormhole sucked up the story, so it cannot continue!');
      }
}

async function PlayEnding(index) {
      const text = Endings[index];

      for (const line of text) {
            for(const word of line.split('')){
                  process.stdout.write(`${word}`);
                  await new Promise(resolve => setTimeout(resolve, letterDelay * 1000));
            }
            process.stdout.write("\n")
            await new Promise(resolve => setTimeout(resolve, sentenceDelay * 1000));
      }
}

async function Start() {
      console.clear();
      console.log(Art.Title);
      PlayPart(0);
}