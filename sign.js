function sign(n){
   if (n==0){
      return 0
   }
   return n > 0 ? 1 : -1;
}
console.log(sign(12));
console.log(sign(-2));
console.log(sign(0));

function sameSign(n1, n2){
   if(n1 == 0 && n2 == 0){
      return true
   }
   return sign(n1) + sign(n2) == 2 || sign(n1) + sign(n2) == -2 ? true : false;
}
console.log(sameSign(2, 3));
console.log(sameSign(-2, -3));
console.log(sameSign(2, -3));