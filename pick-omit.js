let pick = (obj, arg2) => {
   let newObj = {};
   if(!Array.isArray(arg2)) arg2 = arg2.split(" ");
   for(let key in obj){
      if(arg2.includes(key)) newObj[key] = obj[key];
   }
   return newObj;
}

pick({"heelo": 1, "hi": 2}, ["heelo", "world"]);

let omit = (obj, arg2) => {
   let newObj = {};
   if(!Array.isArray(arg2)) arg2 = arg2.split(" ");
   for(let key in obj){
      if(!arg2.includes(key) && obj.hasOwnProperty(key)) newObj[key] = obj[key];
   }
   return newObj;
}
