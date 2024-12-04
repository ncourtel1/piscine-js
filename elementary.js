function multiply(a, b){
   if(a == 0 || b == 0){
      return 0;
   }
   let isnegative = false;
   if((a < 0 && b > 0)||(a > 0 && b < 0)){
      isnegative = true;
   }
   a = Math.abs(a);
   b = Math.abs(b);
   let res = a;
   
   for(let i = 1; i < b; i++){
      res+=a
   }
   if(isnegative){
      return -res;
   }else{
      return res;
   }
}

function divide(a, b){
   if(a == 0 || b == 0){
      return 0;
   }
   let isnegative = false;
   if((a < 0 && b > 0)||(a > 0 && b < 0)){
      isnegative = true;
   }
   a = Math.abs(a);
   b = Math.abs(b);
   let res = a;
   let count = 0;
   if(a<b){
      return 0;
   }
   for(let i = 1; i < b; i++){
      if(res-b > 0){
         res -= b;
         count++; 
      }
   }
   if(isnegative){
      return -count;
   }else{
      return count;
   }
}
function modulo(a, b){
   if(b === 0) return 0;
   if(Math.abs(a) < Math.abs(b)) return a;
   const absB = Math.abs(b);
   let res = Math.abs(a);
   while(res>=absB){
      res-=absB;
   }
   return a > 0  ? res : -res
} 
console.log(multiply(2, 9))
console.log(divide(9, 3))
console.log(modulo(123, -22))