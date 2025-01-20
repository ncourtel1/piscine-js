// Fonction pour filtrer les valeurs de l'objet
const filterValues = (obj, callback) => {
   const result = {};
   for (const key in obj) {
       if (obj.hasOwnProperty(key) && callback(obj[key], key, obj)) {
           result[key] = obj[key];
       }
   }
   return result;
};

// Fonction pour mapper les valeurs de l'objet
const mapValues = (obj, callback) => {
   const result = {};
   for (const key in obj) {
       if (obj.hasOwnProperty(key)) {
           result[key] = callback(obj[key], key, obj);
       }
   }
   return result;
};

// Fonction pour réduire les valeurs de l'objet
const reduceValues = (obj, callback, initialValue) => {
   const keys = Object.keys(obj);
   let accumulator = initialValue;

   if (accumulator === undefined) {
       // Si aucune valeur initiale n'est fournie, utiliser la première valeur de l'objet
       accumulator = obj[keys[0]];
       keys.shift(); // Supprimer la première clé pour ne pas la traiter deux fois
   }

   for (const key of keys) {
       accumulator = callback(accumulator, obj[key], key, obj);
   }

   return accumulator;
};