let isFriday = date => {
   return date.getDay() === 5;
}

let isWeekend = date => {
   return date.getDay() === 0 || date.getDay() === 6
}

let isLeapYear = date => {
   const year = date.getFullYear();
   return (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0));
}

let isLastDayOfMonth = date => {
   const currentMonth = date.getMonth();  // Récupérer le mois actuel (0-indexé)
   const nextDay = new Date(date);
   nextDay.setDate(date.getDate() + 1);  // Ajouter un jour à la date actuelle
   return nextDay.getMonth() !== currentMonth;  // Si le mois change, c'est le dernier jour du mois
}