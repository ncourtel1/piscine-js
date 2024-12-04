function Is() {}

Is.prototype.num = function(value){
   return typeof value === 'number' && !isNaN(value);
}
Is.prototype.nan = function(value){
   return typeof value === 'number' && isNaN(value);
}
Is.prototype.str = function(value){
   return typeof value === 'string';
}
Is.prototype.bool = function(value){
   return typeof value === 'boolean';
}
Is.prototype.undef = function(value){
   return typeof value === 'undefined';
}
Is.prototype.def = function(value){
   return typeof value !== 'undefined';
}
Is.prototype.arr = function(value){
   return Array.isArray(value);
}
Is.prototype.obj = function(value){
   return value !== null && typeof value === 'object' && !Array.isArray(value);
}
Is.prototype.fun = function(value){
   return typeof value === 'function';
}
Is.prototype.truthy = function(value){
   return !!value;
}
Is.prototype.falsy = function(value){
   return !value;
}


const is = new Is();

console.log(is.num(5));
console.log(is.nan(NaN));
console.log(is.str('Hello'));
console.log(is.bool(true));
console.log(is.undef(undefined))
console.log(is.def(2));
console.log(is.arr([1, 'r']));
console.log(is.obj({1:2}));
console.log(is.fun(function hello(){}))
console.log(is.truthy(13));
console.log(is.falsy(NaN));