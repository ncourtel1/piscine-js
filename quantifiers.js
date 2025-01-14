function every(arr, func) {
   for(let elem of arr){
      if(!func(elem)) return false
   }
   return true;
}

function some(arr, func){
   for(let elem of arr){
      if(func(elem)) return true;
   }
   return false;
}

function none(arr, func){
   for(let elem of arr){
      if(func(elem)) return false;
   }
   return true;
}

