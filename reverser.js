function reverse(s){
   let rev;
   if(typeof s === 'string'){
      rev = "";
   }else{
      rev = [];
   }
   for(let i = s.length-1; i >= 0; i--){
      if(typeof s === 'string'){
         rev+= s[i]
      }else{
         rev.push(s[i])
      }
   }
   return rev
}

console.log(reverse("Hello"))
console.log(reverse([1, 2, 3, 4]))