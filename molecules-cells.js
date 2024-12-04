function DNA(cell){
   let newcell = "";
   let i;
   for(i in cell){
      switch(cell[i]){
         case "C":
            newcell += "G"
            break;
         case "G":
            newcell += "C"
            break;
         case "A":
            newcell += "T"
            break;
         case "U":
            newcell += "A"
            break;
         default:
            newcell += cell[i]
            break;
      }
   }
   return newcell;
}

function RNA(cell){
   let newcell = "";
   let i;
   for(i in cell){
      switch(cell[i]){
         case "G":
            newcell += "C"
            break;
         case "C":
            newcell += "G"
            break;
         case "T":
            newcell += "A"
            break;
         case "A":
            newcell += "U"
            break;
         default:
            newcell += cell[i]
            break;
      }
   }
   return newcell;
}

console.log(RNA("CUAG"))
console.log(DNA("CTAG"))