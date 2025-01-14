let map = (arr, func) => {
   let newArr = []
   for(let i = 0; i < arr.length; i++){
      newArr.push(func(arr[i], i, arr))
   }
   return newArr;
}

let flatMap = (arr, func) => {
   let newArr = []
   for(let i = 0; i < arr.length; i++){
      let trans = func(arr[i], i, arr);
      if(Array.isArray(trans)) newArr.push(...trans);
      else newArr.push(trans);
   }
   return newArr;
}