function pyramid(str, number) {
   let lines = [];
   let lastRow = number * 2 - 1;

   for (let i = 0; i < number; i++) {
      let currentLine = ""; 
      for (let j = 1; j <= lastRow; j++) {
         if (j >= number - i && j <= number + i) {
            currentLine += str;
         } else {
            currentLine += " ".repeat(str.length);
         }
      }
      lines.push(currentLine.trimEnd()); 
   }

   return lines.join("\n");
}

console.log(pyramid("*", 5));
console.log(pyramid('{}', 12));