let filter = (arr, func) => {
   let res = []
   for(let i = 0; i < arr.length; i++){
      if(func(arr[i], i, arr)) res.push(arr[i]);
   }
   return res;
}

let reject = (arr, func) => {
   let res = []
   for(let i = 0; i < arr.length; i++){
      if(!(func(arr[i], i, arr))) res.push(arr[i]);
   }
   return res; 
}

let partition = (arr, func) => {
   let true_ = [], false_ = [], res = [];
   for(let i = 0; i < arr.length; i++){
      if(!(func(arr[i], i, arr))) false_.push(arr[i]);
      else if(func(arr[i], i, arr)) true_.push(arr[i])
   }
   res.push(true_)
   res.push(false_);
   return res;
}