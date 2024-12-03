function isPositive(number){
   return number > 0 ? true : false;
}

function abs(number){
   return isPositive(number) == true ? number : number * -1;
}