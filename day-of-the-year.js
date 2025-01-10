function dayOfTheYear(date) {
   const startOfYear = new Date(Date.UTC(date.getFullYear(), 0, 1));
   const currentDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
   const differenceInMillis = currentDate - startOfYear;
   return Math.floor(differenceInMillis / (1000 * 60 * 60 * 24)) + 1;
}