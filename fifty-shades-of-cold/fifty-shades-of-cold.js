import { colors } from "./fifty-shades-of-cold.data.js"

export const generateClasses = () => {
   const head = document.querySelector("head");
   const style = document.createElement("style");
   let styleContent = "";
   colors.forEach(color =>{
      styleContent += `
         .${color}{
            background: ${color}
         }
      `;
   })
   style.innerHTML = styleContent;
   head.appendChild(style);
}

export const generateColdShades = () => {
   const coldShades = colors.filter(color => /aqua|blue|turquoise|green|cyan|navy|purple/i.test(color));
   for(let color of coldShades){
      const div = document.createElement("div");
      div.classList.add(color);
      div.textContent = color;
      div.addEventListener("click", () => choseShade(color));
      document.body.appendChild(div);
   }
}

export const choseShade = (color) => {
   const divs = document.querySelectorAll("div");
   divs.forEach(div =>{
      div.className = color
   })
}