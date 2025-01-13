let filterShortStateName = arr => {
   return arr.filter((word => word.length < 7));
}
console.log(filterShortStateName(["22", "4444", "7777777", "1", "88888888"]));



let filterStartVowel = arr => {
   let isVowel = word => {
      let firstLetter = word[0].toLowerCase();
      return ["a", "e", "i", "o", "u"].includes(firstLetter);
   }
   return arr.filter(isVowel);
}
console.log(filterStartVowel(["Hello", "Avec", "Non", "Oui"]));



let filter5Vowels = arr => {
   let is5 = word =>{
      let count = 0;
      for(let r of word){if(r.toLowerCase() == "a" || r.toLowerCase() == "e" || r.toLowerCase() == "i" || r.toLowerCase() == "o" || r.toLowerCase() == "u") count++}
      return count >= 5;
   }
   return arr.filter(is5);
}
console.log(filter5Vowels(["ouiii", "non", "ouuui", "noooon"]))


let filter1DistinctVowel = arr => {
   return arr.filter(word =>{
      let vowels = word.toLowerCase().match(/[aeiou]/g); 
        if (!vowels) return false; 
        let distinctVowels = new Set(vowels); 
        return distinctVowels.size === 1; 
   });
}
console.log(filter1DistinctVowel(["Alabama", "Ilabama"]));


let multiFilter = arr => {
   let cap = a => a["capital"].length >= 8;
   let name = a => !["a", "e", "i", "o", "u"].includes(a["name"][0].toLowerCase());
   let tag = a => /[aeiou]/i.test(a["tag"]);
   let region = a => a["region"] != "South";
   return arr.filter(a => cap(a) && name(a) && tag(a) && region(a));
}
console.log(multiFilter([
   {
      capital: 'Panamaaa',
      name: "sa",
      tag: "a",
      state: 'california',
      region: 'South'
   }
]));