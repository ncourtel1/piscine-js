const escapeStr = "\`\\/\"\'";
const arr = Object.freeze([4, '2']);

const obj3 = Object.freeze({
   str: "hello",
   num: 10,
   bool: false,
});

const nested = Object.freeze({
   arr: Object.freeze([4, undefined, '2']),
   obj: obj3, 
});

const obj = Object.freeze({
   str: "string",
   num: 10,
   bool: true,
   undef: undefined,
   nested: nested,
});

console.log(obj);