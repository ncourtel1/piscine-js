function get(source, path){
   const keys = path.split('.');
   let current = source;

   for(let key of keys){
      if(current === undefined || current === null){
         return undefined;
      }

      const keyNumber = Number(key);
      if(!isNaN(keyNumber)){
         key = keyNumber;
      }
      current = current[key]
   }
   return current
}

console.log(get({ key: 'value' }, 'key'))