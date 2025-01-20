// Fonction pour filtrer les clés d'un objet
const filterKeys = (obj, callback) => {
   const result = {};
   for (const key in obj) {
       if (obj.hasOwnProperty(key) && callback(key, obj[key], obj)) {
           result[key] = obj[key];
       }
   }
   return result;
};

// Fonction pour mapper les clés d'un objet
const mapKeys = (obj, callback) => {
   const result = {};
   for (const key in obj) {
       if (obj.hasOwnProperty(key)) {
           const newKey = callback(key, obj[key], obj);
           result[newKey] = obj[key];
       }
   }
   return result;
};

// Fonction pour réduire les clés d'un objet
const reduceKeys = (obj, callback, initialValue) => {
   const keys = Object.keys(obj);
   let accumulator = initialValue;

   if (accumulator === undefined) {
       // Si aucune valeur initiale n'est fournie, utiliser la première clé comme point de départ
       accumulator = keys[0];
       keys.shift(); // Retirer la première clé pour éviter de la traiter deux fois
   }

   for (const key of keys) {
       accumulator = callback(accumulator, key, obj[key], obj);
   }

   return accumulator;
};