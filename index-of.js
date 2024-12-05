function indexOf(arr, value, optIdx){
   let isHere = true;
   if(typeof optIdx === 'undefined'){
      isHere = false;
   }
   if(isHere){
      for(let i = optIdx; i < arr.length; i++){
         if(arr[i] == value) return i;
      }
      return -1;
   }
   for(let i = 0; i < arr.length; i++){
      if(arr[i] == value) return i;
   }
   return -1;
}
function lastIndexOf(arr, value, optIdx) {
   if (typeof optIdx !== 'undefined') {

      optIdx = Math.min(arr.length - 1, optIdx);

      for (let i = optIdx; i >= 0; i--) {
         if (arr[i] === value) {
            return i;
         }
      }
      return -1; 
   }

   for (let i = arr.length - 1; i >= 0; i--) {
      if (arr[i] === value) {
         return i;
      }
   }
   return -1; 
}

function includes(arr, value){
   for(let i = 0; i < arr.length; i++){
      if(arr[i] == value){
         return true;
      }
   }
   return false;
}