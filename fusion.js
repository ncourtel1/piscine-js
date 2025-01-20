const fusion = (obj1, obj2) => {
   const result = {};

   // Récupérer toutes les clés uniques des deux objets
   const keys = new Set([...Object.keys(obj1), ...Object.keys(obj2)]);

   keys.forEach((key) => {
       const val1 = obj1[key];
       const val2 = obj2[key];

       // Si les deux valeurs sont des tableaux, on les concatène
       if (Array.isArray(val1) && Array.isArray(val2)) {
           result[key] = [...val1, ...val2];
       }
       // Si les deux valeurs sont des chaînes, on les concatène avec un espace
       else if (typeof val1 === "string" && typeof val2 === "string") {
           result[key] = `${val1} ${val2}`;
       }
       // Si les deux valeurs sont des nombres, on les additionne
       else if (typeof val1 === "number" && typeof val2 === "number") {
           result[key] = val1 + val2;
       }
       // Si les deux valeurs sont des objets, on les fusionne récursivement
       else if (typeof val1 === "object" && typeof val2 === "object" && val1 !== null && val2 !== null) {
           result[key] = fusion(val1, val2);
       }
       // En cas de conflit de types, on remplace par la valeur de obj2
       else if (val2 !== undefined) {
           result[key] = val2;
       }
       // Si seule la première valeur existe, on la conserve
       else {
           result[key] = val1;
       }
   });

   return result;
};