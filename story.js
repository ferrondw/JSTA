const Art = require("./art.js");

const Story = [
  { // 0 - Waking up with a headache
    text: ['After a long day of work, you can finally sleep.',
      'But, after waking up, you have a splitting headache!',
      'Pressing the sore eyelids together while yawning with crispy lips, you get out of bed.',
      'Still a little bit dizzy from standing up, you quickly come to a decision to make.'],
    choices: {
      'Look around what can help with the headache': 1,
      'Notice something glowing': 9
    },
  },
  { // 1 - Looking for help
    text: ['As you stumble around your room looking for something to help with the headache, you notice 2 things.',
      'On one end of the room is a paracetemol, on the other a cold glass of water.',
      'You are simply too dizzy to get both, who knows what might go wrong if you did!',
      'So, will you...'],
    choices: {
      'Get the glass of water.': 2,
      'Get the paracetemol.': 2,
    },
  },
  { // 2 - Clearing up from fatigue
    text: ['After that you feel a lot better!',
      'As you sit down in your chair, there is a sudden realisation...',
      'You haven\'t started coding your text adventure!',
      'Franctically opening the project, you...'],
    choices: {
      'Start coding your text adventure.': 3
    },
  },
  { // 3 - What a job, but what next?
    text: ['After a long long session of coding your text adventure at 1 in the morning, you feel the fatigue kick in.',
      'Because it\'s not an easy job, coding a whole story!',
      'It\'s time to...'],
    choices: {
      'Go to bed.': 6,
      'Keep working.': 'e0',
      'Finish this one small task, it will not take long!': 4
    },
  },
  { // 4 - Finishing what must be done
    text: ['As you slowly sigh out, there is a nagging fear if you don\'t continue to finish this one task, you will forget what you were doing!',
      'Out of pure fear you start typing away, it\'s almost done!',
      'But after another hour of coding, you start to feel drowsy.',
      'Even after drinking some water, the drowsy feeling won\'t go away!'],
    choices: {
      'Go to bed': 6,
      'Make a doctor\'s appointment': 5,
    },
  },
  { // 5 - At the doctor's
    text: ['At the doctor\'s, he sits down with you. The doctor say\'s \"I\'m Carlos Emanuel Juan Stephagonos, how can I help you today?\"',
      'You begin talking with Carlos Emanuel Juan Stephagonos about your illness.',
      'Carlos Emanuel Juan Stephagonos asks you a question, \"What could you possibly do to get to this state?\"'],
    choices: {
      'Tell him you overworked to finish your text adventure.': 'e1',
      'Tell him you don\'t know, you woke up like this': 'e1',
    },
  },
];

module.exports = Story;

/*  STORY PART 

  { // i - desc
    text: ['',
    ''],
    choices: {
      '': 0,
      '': 'e0',
    },
  },

*/