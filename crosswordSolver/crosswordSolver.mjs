import { checkValidNumberOfWords, checkDoubleInWordsList, checkInputFormat, transformPuzzleToGrid } from "./check.mjs";
import { Word, findHorizontalWordInGrid, findVerticalWordInGrid, detectedWord, customSort } from "./gridUtils.mjs";

const puzzle = 
`..1.1..1...
10000..1000
..0.0..0...
..1000000..
..0.0..0...
1000..10000
..0.1..0...
....0..0...
..100000...
....0..0...
....0......`;
let words = [
   'popcorn',
  'fruit',
  'flour',
  'chicken',
  'eggs',
  'vegetables',
  'pasta',
  'pork',
  'steak',
  'cheese',
]


function crosswordSolver(grid, words, detectedWord){
}

function placeWordInGrid(grid, word, axe, start, end){

}







let grid = transformPuzzleToGrid(puzzle);
//console.log(grid);
console.log(checkValidNumberOfWords(grid, words));
//console.log(checkDoubleInWordsList(words));
//console.log(checkInputFormat(puzzle, words));


findHorizontalWordInGrid(grid);
findVerticalWordInGrid(grid);
//console.log(detectedWord);

// sort in descending order to minimize the conflict (easier to place larger word first)
detectedWord.sort(customSort("-length"));
console.log(detectedWord);
