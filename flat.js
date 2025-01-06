function flat(array, depth = 1) {
   const result = [];
   for (const item of array) {
     if (Array.isArray(item) && depth > 0) {
       result.push(...flat(item, depth - 1));
     } else {
       result.push(item);
     }
   }
   return result;
 }