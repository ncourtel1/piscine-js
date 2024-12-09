function getURL(str) {
   const reg = /https?:\/\/(?:www\.)?[a-zA-Z0-9-]+\.[a-zA-Z]{2,6}(?:[\/\w\.-]*)\??(?:[a-zA-Z0-9=&%_+~-]*)(?:#[a-zA-Z0-9_-]*)?/g;
   let res = [];
   let check;

   // Recherche toutes les correspondances d'URLs
   while ((check = reg.exec(str)) !== null) {
      res.push(check[0]);  // On ajoute l'URL trouvée à la liste
   }

   return res;
}

function greedyQuery(dataSet) {
   const reg = /https?:\/\/[a-zA-Z0-9\-._~:/?#[\]@!$&'()*+,;=]+(?:\?([^#]*))?/g;
   const urls = dataSet.match(reg) || [];
   return urls.filter(url => {
       const queryParams = (url.split('?')[1] || '').split('&').length;
       return queryParams >= 3;
   });
}

function notSoGreedy(dataSet) {
   const reg = /https?:\/\/[a-zA-Z0-9\-._~:/?#[\]@!$&'()*+,;=]+(?:\?([^#]*))?/g;
   const urls = dataSet.match(reg) || [];
   return urls.filter(url => {
       const queryParams = (url.split('?')[1] || '').split('&').length;
       return queryParams >= 2 && queryParams <= 3;
   });
}