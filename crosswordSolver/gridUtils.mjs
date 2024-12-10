export let detectedWord = [];
export class Word{
   constructor(start, end, orientation){
      this.start = start;
      this.end = end;
      this.orientation = orientation;
      this.length = Math.abs(end.col - start.col || end.row - start.row) + 1;
      this.filled = false;
   }

   canFit(word){
      return word.length === this.length;
   }

   fill(word){
      this.filled = true;
   }
}

export function findHorizontalWordInGrid(grid){
   for(let i = 0; i < grid.length; i++){
      let len = 0;
      let start = [];
      let word;
      for(let j = 0; j < grid[i].length; j++){
         if (grid[i][j] == 1 || grid[i][j] == 2) {
            start = [i, j]; // Coordonnées de début
            len = 0; // Réinitialiser la longueur

            // Parcourir le mot jusqu'à un '.' ou la fin de la ligne
            while (j < grid[i].length && grid[i][j] != ".") {
               len++;
               j++;
            }

            // Enregistrer la fin du mot (j - 1 car j est sur '.' ou hors-limite)
            let end = [i, j - 1];

            // Vérifier si c'est un mot valide (longueur > 1 ou autre règle)
            if (len > 1) {
               word = new Word(
                  { row: start[0], col: start[1] },
                  { row: end[0], col: end[1] },
                  0 // Orientation horizontale
               );
               detectedWord.push(word);
            }
         }
      }
   }
}

export function findVerticalWordInGrid(grid) {
   for(let j = 0; j < grid[0].length; j++){
      let len = 0;
      let start = [];
      let word;
      for(let i = 0; i < grid.length; i++){
         if(grid[i][j] == 1 || grid[i][j] == 2){
            start = [i, j];
            len = 0;

            while(i < grid.length && grid[i][j] != "."){
               len++;
               i++;
            }

            let end = [i - 1, j];

            if(len > 1){
               word = new Word(
                  {row: start[0], col: start[1]},
                  {row: end[0], col: end[1]},
                  1
               );
               detectedWord.push(word);
            }
         }
      }
   }
}

// Create a custom sort by object's property, ascending or descending order
export function customSort(property) {
   var sortOrder = 1;
   if(property[0] === "-") {
       sortOrder = -1;
       property = property.substr(1);
   }
   return function (a,b) {
       var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
       return result * sortOrder;
   }
}