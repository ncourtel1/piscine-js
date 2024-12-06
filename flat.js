function flat(array, depth = 1) {
   // Tableau final qui contiendra les éléments aplatis
   const result = [];
 
   // Parcourir chaque élément du tableau
   for (const item of array) {
     if (Array.isArray(item) && depth > 0) {
       // Si l'élément est un tableau ET qu'il reste de la profondeur à traiter
       result.push(...flat(item, depth - 1));
     } else {
       // Sinon, on ajoute l'élément directement
       result.push(item);
     }
   }
 
   return result;
 }