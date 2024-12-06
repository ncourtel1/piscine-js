function triangle(str, number){
   let toPrint = "";
   let strfinal = "";
   for(let i = 1; i  <= number; i++){
      for(let j = 1; j <= i; j++){
         toPrint+=str;
      }
      strfinal += toPrint + "\n";
      toPrint = "";
   }
   return strfinal.slice(0, strfinal.length-1);
}
console.log(triangle('*', 5))