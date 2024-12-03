function first(x){
   return x[0];
}

function last(x){
   return x[x.length-1];
}

function kiss(x){
   let arr = [];
   arr[0] = first(x);
   arr.push(last(x));
   return arr
}

console.log(first("hello"));
console.log(last([2, 45, 'p']))
console.log(kiss(['n', "hello", 7]));