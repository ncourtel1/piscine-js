import { checkValidNumberOfWords, checkDoubleInWordsList, checkInputFormat, transformPuzzleToGrid } from "./check.mjs";
import { Word, findHorizontalWordInGrid, findVerticalWordInGrid, detectedWord, customSort } from "./gridUtils.mjs";

const puzzle = 
`2001
0..0
1000
0..0`;
let words = [
   'casa', 'alan', 'ciao', 'anta',
]
words.sort(function(a, b){return b.length - a.length});
function crosswordSolver(grid, wordList, detectedWord){
   
   if(wordList.length == 0){
      return grid;
   }
   let wordToPlace = wordList[0];

   for(let word of detectedWord){

      if(canBePlace(grid, wordToPlace, word.orientation, word.start, word.end, word.length)){
         //const originalGrid = [...grid.map(row => [...row])];

         placeWordInGrid(grid, wordToPlace, word.orientation, word.start, word.end);

         const result = crosswordSolver(grid, wordList.slice(1), detectedWord);

         if(result){
            return result;
         }

         //grid = originalGrid;
      }
   }
   return null;
}

function canBePlace(grid, wordToPlace, wordOrientation, wordStart, wordEnd, wordLength){
   console.log(wordToPlace);

   if(wordLength != wordToPlace.length) return false

   // Check every cell of horizontale word in the grid
   if(wordOrientation == 0){
      let wordIdx = 0;
      for(let i = wordStart.col; i < wordEnd.col; i++){
         if(grid[wordStart.row][i] != "1" && grid[wordStart.row][i] != "2" && grid[wordStart.row][i] != "0" &&  grid[wordStart.row][i] != wordToPlace[wordIdx]){
            console.log("Word can't be place here");
            return false;
         }
         wordIdx++;
      }
      console.log("Word can be place here");
      return true;
   }else{ // Check every cell of vertical word in the grid
      let wordIdx = 0;
      for(let i = wordStart.row; i < wordEnd.row; i++){
         if(grid[wordStart.col][i] != "1" && grid[wordStart.col][i] != "2" && grid[wordStart.col][i] != "0" &&  grid[wordStart.col][i] != wordToPlace[wordIdx]){
            console.log("Word can't be place here");
            return false;
         }
         wordIdx++;
      }
      console.log("Word can be place here");
      return true;
   }
}


function placeWordInGrid(grid, wordToPlace, wordOrientation, wordStart, wordEnd){
   
   if(wordOrientation == 0){
      console.log(wordOrientation)
      let wordIdx = 0;
      for(let i = wordStart.col; i <= wordEnd.col; i++){
         grid[wordStart.row][i] = wordToPlace[wordIdx]
         wordIdx++;
      }
      console.log(grid);
      console.log("Word place successfully");
   }else if(wordOrientation == 1){
      let wordIdx = 0;
      for(let i = wordStart.row; i <= wordEnd.row; i++){
         grid[wordStart.col][i] = wordToPlace[wordIdx];
         wordIdx++;
      }
      console.log(grid);
      console.log("Word place successfully");
   }
   return grid;
}

let grid = transformPuzzleToGrid(puzzle);
//console.log(grid);
//console.log(checkValidNumberOfWords(grid, words));
//console.log(checkDoubleInWordsList(words));
//console.log(checkInputFormat(puzzle, words));


findHorizontalWordInGrid(grid);
findVerticalWordInGrid(grid);

// sort in descending order to minimize the conflict (easier to place larger word first)
detectedWord.sort(customSort("-length"));
//console.log(detectedWord);

console.log(crosswordSolver(grid, words, detectedWord));
