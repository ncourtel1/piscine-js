function first(x){
   return x[0];
}

function last(x){
   return x[x.length-1];
}

function kiss(x){
   let arr = [];
   arr.push(last(x));
   arr[1] = first(x);
   return arr
}

console.log(first("hello"));
console.log(last([2, 45, 'p']))
console.log(kiss(kiss([1, 2, 3, 4, 5, 6])));