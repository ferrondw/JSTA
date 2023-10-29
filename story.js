const Art = require("./art.js");

const Story = [
  {
    //bit of an explanation because i know daym well imma forget all this in a day

    text: ['First line', 'Second Line', Art.Character], // these lines will get logged line for line with a small delay, i can even call ASCII art from the Art class (art.js) 
    choices: { // these are all the choices the user can make
      'endings': 1,
      'invalid': 2, // first off is the question, the number is the index of this Story[] that will get called next
    },
  },
  {
    text: ['First line - 2nd part', 'Second line - 2nd part'],
    choices: {
      'good ending': 'e0',
      'this is the bad ending': 'e1'
    },
  }
];

module.exports = Story;