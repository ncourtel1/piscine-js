import { findHorizontalWordInGrid, findVerticalWordInGrid, detectedWord, customSort,displayFinalGrid } from "./gridUtils.mjs";
import { checkInputFormat, checkDoubleInWordsList, checkValidNumberOfWords, transformPuzzleToGrid } from "./check.mjs";

const puzzle = 
'2001\n0..0\n1000\n0..0';
let words = [
   'aaab', 'aaac', 'aaad', 'aaae'
]
let finalGrid = [];


if(!checkInputFormat(puzzle, words) || !checkDoubleInWordsList(words) || !checkValidNumberOfWords(puzzle, words)){
   console.log("We can't resolve the grid, error in parameters")
}else{
   words.sort(function(a, b){return b.length - a.length});

   let grid = transformPuzzleToGrid(puzzle);

   findHorizontalWordInGrid(grid);
   findVerticalWordInGrid(grid);

   // sort in descending order to minimize the conflict (easier to place larger word first)
   detectedWord.sort(customSort("-length")); 

   finalGrid = crosswordSolver(grid, words, detectedWord);
}

export function crosswordSolver(grid, wordList, detectedWord){

   if(wordList.length == 0){
      return grid;
   }
   let wordToPlace = wordList[0];

   for(let word of detectedWord){

      if(canBePlace(grid, wordToPlace, word.orientation, word.start, word.end, word.length)){
         const originalGrid = [...grid.map(row => [...row])];

         placeWordInGrid(grid, wordToPlace, word.orientation, word.start, word.end);

         const result = crosswordSolver(grid, wordList.slice(1), detectedWord);

         if(result){
            return result;
         }

         grid = originalGrid;
      }
   }
   return [];
}

function canBePlace(grid, wordToPlace, wordOrientation, wordStart, wordEnd, wordLength){
   if(wordLength != wordToPlace.length) return false

   // Check every cell of horizontale word in the grid
   if(wordOrientation == 0){
      let wordIdx = 0;
      for(let i = wordStart.col; i < wordEnd.col; i++){
         if(grid[wordStart.row][i] != "1" && grid[wordStart.row][i] != "2" && grid[wordStart.row][i] != "0" &&  grid[wordStart.row][i] != wordToPlace[wordIdx]){
            //console.log("Word can't be place here");
            return false;
         }
         wordIdx++;
      }
      //console.log("Word can be place here");
      return true;
   }else{ // Check every cell of vertical word in the grid
      let wordIdx = 0;
      for(let i = wordStart.row; i <= wordEnd.row; i++){
         //console.log(grid[i][wordStart.col])
         if(grid[i][wordStart.col] != "1" && grid[i][wordStart.col] != "2" && grid[i][wordStart.col] != "0" &&  grid[i][wordStart.col] != wordToPlace[wordIdx]){
            //console.log("Word can't be place here");
            return false;
         }
         //console.log(wordToPlace[wordIdx])
         wordIdx++;
      }
      //console.log("Word can be place here");
      return true;
   }
}


function placeWordInGrid(grid, wordToPlace, wordOrientation, wordStart, wordEnd){
   console.log(wordToPlace);
   if(wordOrientation == 0){
      //console.log(wordOrientation)
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
         grid[i][wordStart.col] = wordToPlace[wordIdx];
         wordIdx++;
      }
      console.log(grid);
      console.log("Word place successfully");
   }
   return grid;
}

displayFinalGrid(finalGrid);


