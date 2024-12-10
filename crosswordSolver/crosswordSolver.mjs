import { checkValidNumberOfWords, checkDoubleInWordsList, checkInputFormat, transformPuzzleToGrid } from "./check.mjs";
import { Word, findHorizontalWordInGrid, findVerticalWordInGrid, detectedWord } from "./gridUtils.mjs";

const puzzle = 
`...1...........
..1000001000...
...0....0......
.1......0...1..
.0....100000000
100000..0...0..
.0.....1001000.
.0.1....0.0....
.10000000.0....
.0.0......0....
.0.0.....100...
...0......0....
..........0....`;
const words = [
   'sun',
   'sunglasses',
   'suncream',
   'swimming',
   'bikini',
   'beach',
   'icecream',
   'tan',
   'deckchair',
   'sand',
   'seaside',
   'sandals',
]

function crosswordSolver(){
   
   // VALIDATION LISTE
   // TODO : 2.2 - Verifier que tous les mots correspondent a des longueurs detectees
   
   // PLACEMENT
   // TODO : 3 - Ecrire une fonction recursive pour essayer chaque mot dans chaque emplacement
   
   // ERREUR
   // TODO : 4.1 - Verifier apres le placement si la grille est coherente
   // TODO : 4.2 - Ajouter une condition pour detecter plusieurs solutions possibles
}


//console.log(grid);
//console.log(checkValidNumberOfWords(grid, words));
//console.log(createWordsLengthMap(words));
//console.log(checkDoubleInWordsList(words));
//console.log(checkInputFormat(puzzle, words));



let grid = transformPuzzleToGrid(puzzle);
findHorizontalWordInGrid(grid);
findVerticalWordInGrid(grid);
//console.log(detectedWord);

for(let wordObj of detectedWord){
   for(let wordLi of words){
      if(wordLi.length == wordObj.length){
         console.log(`${wordLi} fit in ${wordObj}`)
      }
   }
}
