function matchCron(cron, date) {
   // Diviser la chaîne cron et extraire les valeurs de la date
   const [cronMinute, cronHour, cronDay, cronMonth, cronWeekday] = cron.split(' ');
   const minute = date.getMinutes();
   const hour = date.getHours();
   const day = date.getDate();
   const month = date.getMonth() + 1; // getMonth est 0-indexé
   const weekday = (date.getDay() === 0) ? 7 : date.getDay(); // getDay est 0 pour dimanche, donc ajustement

   // Fonction pour vérifier si un champ cron correspond
   const isMatch = (cronValue, dateValue) => {
       return cronValue === '*' || +cronValue === dateValue;
   };

   // Vérification de tous les champs
   return isMatch(cronMinute, minute) &&
          isMatch(cronHour, hour) &&
          isMatch(cronDay, day) &&
          isMatch(cronMonth, month) &&
          isMatch(cronWeekday, weekday);
}
matchCron('* * * 2 *', new Date('2021-02-01 00:00:00'));