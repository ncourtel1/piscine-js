function getIntegerPart(num) {
   let intPart = 0;
 
   if (num >= 0) {
     let step = 1;
     while (step <= num) step *= 10;
     while (step >= 1) {
       while (intPart + step <= num) intPart += step;
       step /= 10;
     }
   }
   else {
     let step = -1;
     while (step >= num) step *= 10;
     while (step <= -1) {
       while (intPart + step >= num) intPart += step;
       step /= 10; 
     }
   }
 
   return intPart;
 }
 
 function getDecimalPart(num) {
   return num - getIntegerPart(num);
 }
 
 function round(number) {
   const decimalPart = getDecimalPart(number);
   if (decimalPart >= 0.5) return getIntegerPart(number) + 1;
   if (decimalPart <= -0.5) return getIntegerPart(number) - 1;
   return getIntegerPart(number);
 }
 
 function ceil(number) {
   const intPart = getIntegerPart(number);
   const decimalPart = getDecimalPart(number);
   return decimalPart > 0 ? intPart + 1 : intPart;
 }
 
 function floor(number) {
   const intPart = getIntegerPart(number);
   const decimalPart = getDecimalPart(number);
   return decimalPart < 0 ? intPart - 1 : intPart;
 }
 
 function trunc(number) {
   return getIntegerPart(number);
 }