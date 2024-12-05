function split(str, sep) {
   let idx = 0;
   let arr = [];
   for (let i = 0; i < str.length; i++)
   {
       if (sep.length === 0)
       {
           arr.push(str[i]);
       }
       else if (str[i] === sep[0])
       {
           let j = 0;
           while (j < sep.length && str[i + j] === sep[j]) j++;
           if (j === sep.length)
           {
               arr.push(str.slice(idx, i));
               idx = i + sep.length;
               i += sep.length - 1;
           }
       }
   }    
   if (sep.length > 0) arr.push(str.slice(idx));
   return arr;
}

function join(arr, sep) {
   let result = '';
   for (let i = 0; i < arr.length; i++)
   {
       result += arr[i];
       if (i < arr.length - 1)
       {
           result += sep;
       }
   }
   return result;
}