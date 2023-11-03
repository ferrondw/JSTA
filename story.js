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
  { // 6 - The glowing orb and a döner sandwich
    text: ['After a good night\'s rest, you wake up feeling amazing!',
      'Who coudn\'t be happy about doing this much work!',
      'After sitting down in your chair to play some Animal Crossing, you notice something...',
      'It seems like something that\'s glowing?',
      'As you begin to inch closer you regain that dizzy feeling, this could not end well!',
      'Your brain can\'t comphehend all the information it\'s getting.',
      'The orb is giving you divine knowledge, in shock you try to throw something at the orb',
      'Frantically searching for something, you throw your döner sandwich to the orb!',
      'All the content of the sandwich get violently ripped apart at a molecular level and are coming your way with an extreme force',
      'A small part gets launched to your head...'],
    choices: {
      'Slowly sink to the ground as you lose consciousness.': 7,
    },
  },
  { // 7 - The void
    text: ['Once you wake up, you are comfortably in your bed...',
      'This is definitely not your bed.',
      'Wait there isn\'t even a bed?!',
      'THERE ISN\'T EVEN A FLOOR?!',
      'You look around, and see a whole lot of nothing, a vast emptiness stretching far out, pitch black.',
      'As you slowly begin to realise that when you touched the orb, you were sucked out far outside the universe, a kind of void.',
      'But, there is something in this void, in the distance you can see something faintly flickering.'],
    choices: {
      'Swim to the flickering object.': 8,
      'Stay here, it may not be safe out there.': 'e2',
    },
  },
  { // 8 - The mysterious door
    text: ['As you begin to swim deeper in the void, trying to reach the flickring object?',
      'That very something is beginning to take shape, and out of every shape possible, it\'s a door!',
      'As you begin to inch closer to the glowing door, you faintly hear muffled sounds coming out of it.',
      'You begin to hear a voice, a voice that, in it\'s own way, resembles you.',
      'Enstranged by this feeling, you open the door and jump through only to find your own room.',
      'You can see your younger self make the decisions you made to end up where you are now.',
      'As you blink slowly, you open your eyes to the sight of another perspective!',
      'You became your younger self, but with the knowledge you have now.',
      'Eventually, you called the police and they dealt with the orb situation.'],
    choices: {
      'I don\'t have a name for this choice so just PICK IT!': 'e3'
    },
  },
  { // 9 - Big blue ball
    text: ['You notice the glowing object right under your bed.',
      'Still dizzy, you bend down, and slowly inch closer to the object.',
      'On closer inspection it\'s an orb... So a glowing orb is in your room?',
      'What will you do with the orb?'],
    choices: {
      'Touch it': 10,
      'Inspect it more': 11,
    },
  },
  { // 10 - Close contact
    text: ['As you reach down, you touch the orb, trying to pick it up.',
      'You feel your hand get sucked in, and you get sent back 10 minutes in time.',
      'But, you see your younger self waking up with a headache too, the younger you sees the orb and...'],
    choices: {
      'You run to touch it again before the younger you can': 'e4',
      'You leave it alone': 'e5',
    },
  },
  { // 11 - Attraction to a ball
    text: ['As you lean in to inspect the orb closer, your headache gets worse too.',
      'Something feels off about this orb, and you know it. But what is it?'],
    choices: {
      'Call the police to investigate the orb': 12,
      'Slowly approach the orb': 13,
    },
  },
  { // 12 - It's the sound of the police
    text: ['You call the police as you are still pondering the orb.',
      'As you wait for the police to arrive, you play some games on your phone.',
      'But your phones screen glitches a bit, who knows what\'s up with that...',
      'The police arrive and one of the officers starts looking at the orb.',
      'He tells you that they can\'t handle this \'mysterious object\'.'],
    choices: {
      'Discuss with the police on what to do with the orb': 22,
      'Play peek-a-boo with the orb and the police :D': 'e6',
    },
  },
  { // 13 - Close grounds
    text: ['As you approach the orb, your head becomes more and more dizzy...',
      'You begin to hear whispers, giving you information of the otherwordly.',
      'Your eyes begin to see the haze that is forming upon you, as all kinds of divine knowledge.',
      'Ears filled with this constant screaming of information.'],
    choices: {
      'Still get closer, never back down never what?': 'e7',
      'Stay at a safe distance to gain more knowledge': 14,
    },
  },
  { // 14 - Jimmy neutron
    text: ['You stay at a safe distance, your eyes bleeding a little bit as the hazy slowly fades away.',
      'With all this new knowledge, and succeeding to stay alife, you learned how to make a time machine with the orb.',
      'You learned that the orb is a divine \'magnum opus\' from an ancient scientist, and it\'s power is in your hands.'],
    choices: {
      'Make and use the time machine!!! >:0': 15,
      'Still get a LITTLE bit closer to get more knowledge on how to build the time machine': 16,
    },
  },
  { // 15 - Time Traveling :0
    text: ['With all the knowledge you gained, you use your bed and closet to make a time machine.',
      'As you place the orb in place with metal tongues, you can hear it power on. The time machine!',
      'You enter the time machine and click in the time coordinates...',
      'As you are flying through time, you hear a beeping!',
      'The emergency LED is glowing bright red!',
      'You put in the wrong time coordinates, and the time machine is about to fail! You might die :0',
      'Frantically searching for a solution, you...'],
    choices: {
      'Try to fix it': 'e8',
      'Realise you put off drinking that cold tasty cocktail you brought with you!': 23,
    },
  },
  { // 16 - You got silver, go for gold!
    text: ['As you lean in closer to the orb, your headaches get even worse, but you can just about handle it...',
      ''],
    choices: {
      'STILL get EVEN closer, a human shall not stop, thy becomes Jimmy Neutron': 0,
      'IT\'s enough, let\'s see what you know...': 17,
    },
  },
  { // 17 - Upgrades people, upgrades
    text: ['Still regaining focus from all that information, you learned how to make a really cool dashboard for the time machine!',
      'Together with that, you know how to make air conditioning! Who doesn\'t like fresh air in the middle of the void!',
      'Now, with that you know, you make a REALLY cool time machine, together with a red top, just like the cartoons! What do you want to do with this new time machine?'],
    choices: {
      'Give it a good ol\' smack': 'e9',
      'Use it': 18,
      'Check the air conditioning, maybe it still doesn\'t work...': 19
    },
  },
  { // 18 - idk??
    text: ['',
      ''],
    choices: {
      '': 0,
      '': 'e0',
    },
  },
  { // 19 - Drug addicted alien
    text: ['Mmm... you check and pry and... A screw comes loose! Good thing you checked the air conditioning, who knows what may had happened if you gave it a smack.',
      'You put the screw back in place and seal it with ducktape to be SURE it won\'t fall off again!',
      'So off you go, you turn on the time machine and ready it up to go on your merry way to the past!',
      'Once you are casually controlling a time machine, you have an amazing voyage into the void, nothing but you, a roll of ducktape, a time machine, and a shotgun you brought with you!',
      'But, that\'s not all, something is coming into view faintly...',
      'And suddenly, an alien crashes into your time machine window!',
      'The alien breaks the window and falls inside the time machine.',
      'The alien begins cursing at you in some unknown language, you are simply speechless.',
      'The alien makes symbols for money, points at the window, and fakes being stoned.',
      'You ask what the alien wants but it can simply not answer you.',
      'You grab a 10 euro bill our of your pocket, and wave it around.',
      'The alien starts walking towards the bill to pick it up, but you pull it back.',
      'The alien pretends to be stoned again, and you ask \"w- weed?\"',
      'The alien smiles with wide eyes, it is adapting to your language...',
      'You ask one more time, really phonetically and visually explaining it: \"Do you want weed for this money?\"',
      'The alien smugs and says \"Yes! I weed, get money you.\"',
      '\"Alien fix window for weed money!\"'],
    choices: {
      'Let the alien fix your window': 20,
      'Nuh uhh 🗣️. 10 euro is a lot!': 24,
    },
  },
  { // 20 - Engineer alien
    text: ['You nod your head, \"You\'ll get the weed money, AND you\'ll fix the window?\"',
      'The alien nods its head and snatches the 10 euro out of your hand, afterwards it begins fixing the window.',
      'In an instant, the window is fixed, and the alien looks at its work with pride.',
      'So you want to continue the voyage in time, but the alien asks \"May join I?\" and you oblige.',
      'With the alien in your time machine, you both go back in time. It just chill like that.',
      'The alien also brought more cocktails for you to enjoy! But you need to pilot the time machine, so the alien takes a seat and enjoys a cold cocktail.',
      'But... as soon as you make a turn, the alien spills its cocktail over the orb...',
      'The ship stands still as it can\'t function any longer.',
    'The alien looks you dead in the eye, raises one eyebrow and says \"10 euro, I will fix\"'],
    choices: {
      'Pay the money': 26,
      'Refuse to pay, you already gave him money!': 21,
    },
  },
  { // 21 - Alien foaming from the mouth
    text: ['As you shake your head, the alien looks you even more dead in the eye.',
    'Its eyes widen sideways, and it begins shaking violently. The alien has gone feral.',
  'It leaps at you while hissing \"WEEEEDDDD\"'],
    choices: {
      'Grab the shotgun you have lying around and shoot the feral alien': 25,
      'Let it rampage, poor alien just wants weed :(': 'e10',
    },
  },
  { // 22 - Police investigation
    text: ['The police resort to calling the FBI, they handle the situation professionally and clear away the orb.',
    'Afterwards the police invite you to a fun game of rock, paper and scissors!',
  'You won! Nice!'],
    choices: {
      'Realise you haven\'t worked on your text adventure! Quick get to work!!!': 3
    },
  },
  { // 23 - Cock tail mm yes
    text: ['The time coordinates were good, the display just bugged out!',
    'You arrive back in time and get merged with your younger self (idk how time travel works)',
  'You will begin your story again, but with newfound knowledge, what choices will you make this time?'],
    choices: {
      'Accept this': 0,
    },
  },  { // 24 - Nuh uhh to payments
    text: ['After refusing to pay, the alien knocks you out and you wake up in a kind of void.',
    'Empty of everything, you know it\'s better to locate something that may bring you back to a normal world. You will...'],
    choices: {
      'Swim deeper into the void': 8,
    },
  },
  { // 25 - Doom Eternal
    text: ['You stumble back from the alien\'s leap and you see the shotgun you had lying around.',
    'You frantically grab the shotgun and kill the alien with a few shots!',
  'The aliens eyes and mouth glow, after which it is turned into ash.',
  'The shotgun has also damaged the time machine, you fix it with the ducktape you had left over from fixing the loosw screw!',
'You use the aliens heart to substitute for the damaged orb, and head further completely covered in blood.',
'As you arrive back in time, you can see your younger self through the window, noticing the glowing orb.',
'You head into your house and barge into your own room, warning your younger self from the orb.',
'But as you talk, you can see time and space warp slightly, your mouth is lost, replaced with skin.',
'You lose your sight, smell and every other sense as everything is turned upside down.',
'And just as you lose everything, you open your eyes.',
'You have been merged with your younger self, but with all the knowledge you have now.',
'After this long day, you think it\'s best to get a good nights rest and think about life with tomorrow in mind.'],
    choices: {
      'Zzzzz': 0,
    },
  },
  { // 26 - Debt to an alien
    text: ['As you pay the money, the alien fixes the orb in an instant.',
    'You both really shrug it off, and to be honest, besides the drug addiction of the alien, it was a pretty chill travel in time.',
  'But it\'s time for the alien to leave, the cocktail has been consumed. So the alien leaves through the backdoor.',
  'As you arrive back in time, you can see your younger self through the window, noticing the glowing orb.',
  'You head into your house and barge into your own room, warning your younger self from the orb.',
  'But as you talk, you can see time and space warp slightly, your mouth is lost, replaced with skin.',
  'You lose your sight, smell and every other sense as everything is turned upside down.',
  'And just as you lose everything, you open your eyes.',
  'You have been merged with your younger self, but with all the knowledge you have now.',
  'After this long day, you think it\'s best to get a good nights rest and think about life with tomorrow in mind.'],
    choices: {
      'Zzzzz': 0,
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

  { // i - desc
  text: ['',
    ''],
  choices: [
    {
      question: 'balls',
      nextID: 23,
      isEnding: true
    },
    {
      question: 'iwdhoiqdq',
      nextID: 3,
      isEnding: false
    },
  ],
},
*/