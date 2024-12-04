function arrToSet(x){
   return new Set(x);
}
console.log(arrToSet([1, 2, '4']))

function arrToStr(x) {
   return x.join('');
}
console.log(arrToStr([1, 'r']))

function setToArr(x) {
   return Array.from(x);
}
console.log(setToArr({1: '5'}))

function setToStr(x){
   return Array.from(x).join('');
}
console.log(setToStr(arrToSet([1, 2, 3])))

function strToArr(x) {
   return x.split('');
}
console.log(strToArr("hello world"))

function  strToSet(x){
   return new Set(x.split(''));
}
console.log(strToSet("Hello World"))

function mapToObj(x){
   return Object.fromEntries(x);
}
const a = new Map();
a.set(1, '9');
console.log(mapToObj(a))

function objToArr(x){
   return Object.values(x);
}
const obj = {
   1: 6,
   "8": 4
}
console.log(objToArr(obj));

function objToMap(x) {
   return new Map(Object.entries(x));
}
console.log(objToMap(Object.entries(obj)))

function arrToObj(x){
   return Object.assign({}, x);
}
console.log(arrToObj([1, 4, 5]))

function strToObj(x){
   return Object.assign({}, x);
}
console.log(strToObj("hello"))

function superTypeOf(x){
   if(x === null) return "null";
   if(Array.isArray(x)) return "Array";
   const type = Object.prototype.toString.call(x);

   switch(type){
      case "[object Map]":
         return "Map";
      case "[object Set]":
         return "Set";
      case "[object Object]":
         return "Object";
      case "[object String]":
         return "String";
      case "[object Number]":
         return "Number";
      case "[object Function]":
         return "Function";
      default:
         return typeof x;
   }
}
console.log(superTypeOf(obj))
