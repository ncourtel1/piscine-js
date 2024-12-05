function chunk(arr, n){
   let count = 1;
   let newArr = [];
   let temp = [];
   for(let i = 0; i < arr.length; i++){
      temp.push(arr[i]);
      if(count === n){
         newArr.push(temp);
         temp = [];
         n+=2;
         console.log(n)
      }
      count++;
   }
   if(temp.length !== 0){
      newArr.push(temp)
   }
   return newArr;
}
console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8, 9], 2))