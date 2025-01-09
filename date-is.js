let isValid = date => {
   if (typeof date === 'number') {
      date = new Date(date);  // Convertir le timestamp en objet Date
  }
  return date instanceof Date && !isNaN(date.getTime());
};

let isAfter = (d1, d2) => {
   if(!isValid(d1) || !isValid(d2)) return false;
   return d1 > d2;
}

let isBefore = (d1, d2) => {
   if(!isValid(d1) || !isValid(d2)) return false;
   return d1 < d2;
}

let isFuture = date => {
   if(!isValid(date)) return false;
   const now = new Date();
   return date > now;
}

let isPast = date => {
   if(!isValid(date)) return false;
   const now = new Date();
   return date < now;
}

console.log(isValid(""));