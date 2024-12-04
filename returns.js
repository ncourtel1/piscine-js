function id(i) {return i}
function getLength(x){
   if(typeof x === 'string' || Array.isArray(x)){
      return x.length;
   }
   return 0;
}
