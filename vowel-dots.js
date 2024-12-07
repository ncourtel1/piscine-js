const vowels = /[aeiouAEIOU]/
function vowelDots(str){
   for(let i = 0; i < str.length; i++){
      console.log(str[i])
      console.log(vowels.test(str[i]))
      if(vowels.test(str[i])){
         str = insert(str, i)
      }
   }
   return str
}

function insert(str, idx){
   return str.substring(0, idx+1) + "." + str.substring(idx+1)
}

console.log(vowelDots("Hello"))