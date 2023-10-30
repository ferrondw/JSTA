const Art = require("./art.js");

const Story = [
  {
    text: ['### The Clockwork, a tale of time traveling ###',
    'You woke up and died, the end.'],
    choices: {
      'endings': 1,
      'invalid': 2,
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