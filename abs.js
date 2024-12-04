function isPositive(number){
   return number > 0 ? true : false;
}

function abs(number){
   if(number == 0){
      return 0;
   }
   return isPositive(number) == true ? number : number * -1;
}