function get(key){
   return sourceObject[key];
}

function set(key, value){
   sourceObject[key] = value;
}

const sourceObject = {
   num: 42,
   bool: true,
   str: 'some text',
   log: console.log,
}

console.log(get("str"));
set("str", "Hello");
console.log(sourceObject.str);
console.log(sourceObject);