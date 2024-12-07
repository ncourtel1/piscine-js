function letterSpaceNumber(str){
   const reg = /[a-zA-Z]\s[0-9]\b/g;
   // [a-zA-z] toutes les lettres  \s espace  [0-9] chiffre  \b aucune charactere alpha numeric
   return str.match(reg) || []
}
console.log(letterSpaceNumber('example 1, example 20'))
console.log(letterSpaceNumber('He is 8 or 9 years old, not 10.'))