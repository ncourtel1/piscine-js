function words(x){
   let arr = [];
   arr = x.split(" ");
   return arr;
}
console.log(words("Hello world this is me!"));

function sentence(x){
   let sentence = "";
   for (i in x){
      sentence = sentence + x[i] + " "; 
   }
   return sentence;
}
console.log(sentence(["Hello", "World", "this", "is", "me!"]));

function yell(x){
   return x.toUpperCase();
}
console.log(yell("hello"));

function whisper(x){
   return x.toLowerCase();
}
console.log(whisper("HELLO"));

function capitalize(x){
   let str;
   str = x[0].toUpperCase();
   str += (x.slice(1, x.length)).toLowerCase();
   return str;
}
console.log(capitalize("heLLo"));