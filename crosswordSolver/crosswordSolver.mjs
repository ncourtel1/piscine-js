import { checkValidNumberOfWords, checkDoubleInWordsList, checkInputFormat, transformPuzzleToGrid } from "./check.mjs";
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

const fakePuzzle = 123;
const word1 = "hello";

function crosswordSolver(puzzle1, wordList){
   
   // ANALYSE GRILLE
   // TODO : 1.2 - Trouver les emplacements horizontaux et verticaux
   
   // VALIDATION LISTE
   // TODO : 2.2 - Verifier que tous les mots correspondent a des longueurs detectees
   
   // PLACEMENT
   // TODO : 3 - Ecrire une fonction recursive pour essayer chaque mot dans chaque emplacement
   
   // ERREUR
   // TODO : 4.1 - Verifier apres le placement si la grille est coherente
   // TODO : 4.2 - Ajouter une condition pour detecter plusieurs solutions possibles
}

let grid = transformPuzzleToGrid(puzzle);
console.log(grid);
console.log(checkValidNumberOfWords(grid, words));
//console.log(createWordsLengthMap(words));
console.log(checkDoubleInWordsList(words));
console.log(checkInputFormat(puzzle, words));