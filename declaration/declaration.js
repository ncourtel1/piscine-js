let escapeStr = "\'\\/\"\'"
console.log(escapeStr)

let arr = [4, '2']
console.log(arr)

let obj = {
   str: "string",
   num: 10,
   bool: true,
   undef: undefined,
   nested: obj2 = {
      arr: [4, undefined, '2'],
      object: obj3 = {
         str: "hello",
         num: 10,
         bool: false,
      }
   }
}

Object.freeze(obj)

let obj4 = obj;

console.log(obj.nested.object.num);
obj.num = 20;
console.log(obj.nested.object.num);
console.log(obj4.nested.arr)

