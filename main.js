const readlineSync = require("readline-sync") // npm install readline-sync
const Art = require("./art.js");

console.clear();
Introduction(); // dit start het hele verhaal



async function Introduction()
{
      var text = [
            'Je opent je ogen, alles zo helder. Het voelt zo kil, knijpend en verward sta je op.',
            'De bladeren vallen langzaam naast je neer terwijl je opstaat, spieren verkrampt, mond droog en moe.',
            'Terwijl je opstaat, hoor je achter je bladeren kraken alsof er iemand zich verstopt',
            'Vol met schrik begin je harder te ademen, jij denkt dat op wordt gemerkt.',
            Art.Character,
            'character, COOL HEEE >::DDD'
        ]

        for (const line of text)
        {
           console.log(line);
           await new Promise(resolve => setTimeout(resolve, 1000)); // in ms: 1 seconde
        }

      var choices = [
            'Ren weg',
            'Doe alsof je dood bent',
            'Kruip langzaam weg'
      ]

      var userAnswer = readlineSync.question('Wat wil je doen?\n', choices); // dit werkt nog niet voor een of andere reden

      if(userAnswer == choices[0]){
            //doe iets
      }
      else if(userAnswer == choices[1]){
            //doe iets anders
      }
      else if(userAnswer == choices[2]){
            //doe weer iets anders
      }
}