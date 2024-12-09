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

function checkDoubleInWordsList(words){
   let newCheckWords = [];
   for(let i = 0; i < words.length; i++){
      if(words[i] in newCheckWords){
         console.log("Error: There is a double in word's list");
         return false;
      }else{
         newCheckWords.push(words[i]);
      }
   }
   console.log("Valid: No double in the list");
   return true;
}

function checkWordsLength(puzzle, words){

}

function createWordsLengthMap(words){
   const map = new Map();
   for(let i = 0; i < words.length; i++){
      map.set(words[i], words[i].length);
   }
   return map;
}

// Transfor the puzzle input in a 2d grid
function transformPuzzleToGrid(puzzle){
   const grid = [];
   let row = "";
   for(let i of puzzle){
      if(i != "\n"){
         row += i;
      }else{
         grid.push([row]);
         row = "";
      }
   }
   return grid;
}

// Check if the number of word in the grid and the word's list is the same
function checkValidNumberOfWords(grid, words){
   if(words.length === 0){
      console.log("empty word's list");
      return false;
   }
   if(grid.length === 0){
      console.log("empty grid");
      return false;
   }

   const numberOfWords = words.length;
   let count = 0;

   for(let i = 0; i < grid.length; i++){
      for(let j = 0; j < grid[i].length; j++){
         if(grid[i][j] != "." && grid[i][j] > 0){
            count++;
         }
      }
   }
   if(count === numberOfWords){
      console.log("Valid: Same number of word in the grid and the list");
      return true;
   }
   console.log("Not the same amount of word in the grid and the word's list")
   return false;
}

console.log(transformPuzzleToGrid(puzzle));
console.log(checkValidNumberOfWords(puzzle, words));
//console.log(createWordsLengthMap(words));
console.log(checkDoubleInWordsList(words));