function slice(arr, start, end) {
   const isString = typeof arr === 'string';
   let result = isString ? '' : [];

   if (start < 0) start = arr.length + start;
   if (end === undefined) end = arr.length; 
   if (end < 0) end = arr.length + end;

   if (start >= end || start >= arr.length || end <= 0) return result;

   for (let i = Math.max(start, 0); i < Math.min(end, arr.length); i++) {
      if (isString) {
         result += arr[i];
      } else {
         result.push(arr[i]);
      }
   }

   return result;
}