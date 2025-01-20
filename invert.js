const invert = obj => {
   return Object.fromEntries(
      Object.entries(obj).map(([key, val]) => [val, key])
   );
   
}

const obj = {
   1: "hello",
   2: "world",
   3: "!"
}

console.log(invert(obj));

