function cutFirst(s){
   return s.slice(2, s.length)
}
console.log(cutFirst("Hello"))

function cutLast(s){
   return s.slice(0, s.length-2)
}
console.log(cutLast("Hello"))

function cutFirstLast(s){
   let end = s.length - 2;
   return s.slice(2, end)
}
console.log(cutFirstLast("hello World"))
console.log(cutFirstLast('abcdef'))

function keepFirst(s){
   return s.slice(0, 2)
}
console.log(keepFirst("Hello"))

function keepLast(s){
   return s.slice(s.length-2)
}
console.log(keepLast("Hello"))

function keepFirstLast(s){
   if(s.length < 4) return s
   let str = s.slice(0, 2)
   str += s.slice(s.length-2)
   return str
}
console.log(keepFirstLast("Hello World"))
console.log(keepFirstLast('af'))