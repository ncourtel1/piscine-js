let adder = (arr, n) => arr.reduce((acc, curr) => acc + curr, n != undefined ? n : 0)
console.log(adder([1, 2, 3]))

let sumOrMul = (arr, n) => {
   return arr.reduce((acc, num) => num%2 === 0 ? num * acc : num + acc, n != undefined ? n : 0);
} 
console.log(sumOrMul([1, 2, 3, 5, 8], 5))

let funcExec = (funcs, initialValue = 0) => {
   return funcs.reduce((acc, func) => {
      if (typeof func === 'function') {
         return func(acc);  
      }
      return acc; 
   }, initialValue);
}