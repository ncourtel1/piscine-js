function sameAmount(str, reg1, reg2){
   // ajoute le flag g pour reendre l'expression global pour continuer a chercher 
   //apres le premier match trouver
   reg1 = new RegExp(reg1.source, reg1.flags.includes('g') ? reg1.flags : reg1.flags + 'g');
   reg2 = new RegExp(reg2.source, reg2.flags.includes('g') ? reg2.flags : reg2.flags + 'g');
   let check1, check2;
   let count1 = 0;
   let count2 = 0;
   while((check1 = reg1.exec(str)) !== null){
      count1++;
   }
   while((check2 = reg2.exec(str)) !== null){
      count2++;
   }
   if(count1 == count2){
      return true;
   }  
   return false;
}

console.log(sameAmount('hello how are you', /l/, /e/))