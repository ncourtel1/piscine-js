let fold = (arr, func, acc) => {
   let res = acc !== undefined ? acc : arr[0];
   let startIdx = acc !== undefined ? 0 : 1;
   for(let i = startIdx; i < arr.length; i++){
      res = func(res, arr[i]);
   }
   return res
}

let foldRight = (arr, func, acc) => {
   let res = acc !== undefined ? acc : arr[0];
   let endIdx = acc !== undefined ? 0 : 1;
   for(let i = arr.length-1; i >= endIdx; i--){
      res = func(res, arr[i]);
   }
   return res
}

let reduce = (arr, func, acc) => {
   if(arr.length < 1) return false;
   acc = arr[0];
   for(let i = 1; i < arr.length; i++) {
      acc = func(acc, arr[i]);
   }
   return acc;
}

let reduceRight = (arr, func, acc) =>{
   if(arr.length < 1) return false;
   acc = arr[arr.length-1];
   for(let i = arr.length-2; i >= 0; i--) {
      acc = func(acc, arr[i]);
   }
   return acc;
}