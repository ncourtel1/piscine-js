// Check if the input are in the right format
export function checkInputFormat(puzzle, words){
   if(!Array.isArray(words)){
      console.log("Error: The word's list must be of type array");
      return false;
   }
   if(typeof puzzle !== "string"){
      console.log("Error: The puzzle grid must be of type string");
      return false;
   }
   console.log("Valid input format");
   return true;
}

// Check for double word in the list  
export function checkDoubleInWordsList(words){
   let newCheckWords = [];
   for(let i = 0; i < words.length; i++){
      if(newCheckWords.includes(words[i])){
         console.log("Error: There is a double in word's list");
         return false;
      }else if (typeof words[i] === "string"){
         newCheckWords.push(words[i]);
      } else{
         console.log("Error: Every elements in the list must be of type string");
         return false;
      }
   }
   console.log("Valid: No double in the list");
   return true;
}

// Transfor the puzzle input in a 2d grid
export function transformPuzzleToGrid(puzzle){
   const grid = [];
   let row = [];
   for(let i of puzzle){
      if(i != "\n"){
         row.push(i);
      }else{
         grid.push(row);
         row = [];
      }
   }
   if(row.length > 0){
      grid.push(row);
   }
   return grid;
}

// Check if the number of word in the grid and the word's list is the same
export function checkValidNumberOfWords(grid, words){
   if(words.length === 0){
      console.log("Error: empty word's list");
      return false;
   }
   if(grid.length === 0){
      console.log("Error: empty grid");
      return false;
   }

   const numberOfWords = words.length;
   let count = 0;
   for(let i = 0; i < grid.length; i++){
      for(let j = 0; j < grid[i].length; j++){
         if(grid[i][j] != "."){
            const cellValue = parseInt(grid[i][j]);
            if(isNaN(cellValue) && grid[i][j] != "\n"){
               console.log("Error: Invalid value in grid at position", i, j);
               return false;
            }
            if(cellValue == 1){
               count++;
            }
            if(cellValue == 2){
               count+=2;
            }
            if(cellValue > 2){
               console.log("Error: Can't have 3 or more words starting in a cell");
               return false;
            }
         }
      }
   }
   if(count === numberOfWords){
      console.log("Valid: Same number of word in the grid and the list");
      return true;
   }else{
      console.log("Error: Not the same amount of word in the grid and the word's list")
      return false;
   }
}

