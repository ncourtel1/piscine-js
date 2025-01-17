import { styles } from "./pimp-my-style.data.js"

let isRemoving = false;
let count = 0;

export const pimp = () =>{
   let button = document.querySelector("button");

   if(count < styles.length && !isRemoving){
      button.classList.add(styles[count])
      if(count === styles.length - 1){
         button.classList.add('unpimp');
         isRemoving = true
      }
      count++;
      return;
   }
   if(isRemoving){
      button.classList.remove(styles[count]);
      if(count === 0) {
         button.classList.remove("unpimp");
         isRemoving = false;
      };
      count--;
      return;
   }
}