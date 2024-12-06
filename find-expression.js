function findExpression(number, current = 1, expression = "1") {
   if (current === number) {
     return expression;
   }
   if (current > number) {
     return undefined;
   }
   // On test la multiplication avant l'addition
   const multiply = findExpression(number, current * 2, `${expression} ${mul2}`);
   if (multiply) { // meme explication que pour add
     return multiply;
   }
   const add = findExpression(number, current + 4, `${expression} ${add4}`); // ${} permet de formater la string avec la valeur d'une variable
   if (add) { // test add et si la fonction return undefined, donc superieur a number, la condition ne s'execute pas d
     return add; // si c'est possible, appelle la fonction recursivement 
   }
   return undefined;
 }