function ionOut(str){
   // \b /b delimite debut et fin de mot, 
   const reg = /\b(\w*?t)ion\b/g;
   let res = [];
   let match;
   while((match = reg.exec(str)) !== null){
      console.log(match[0]);
      console.log(match[1]);
      res.push(match[1]);
   }
   return res;
}

console.log(ionOut("attention"))