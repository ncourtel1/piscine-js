function matchCron(cron, date) {
   const [cronMinute, cronHour, cronDay, cronMonth, cronWeekday] = cron.split(' ');
   const minute = date.getMinutes();
   const hour = date.getHours();
   const day = date.getDate();
   const month = date.getMonth() + 1; 
   const weekday = (date.getDay() === 0) ? 7 : date.getDay(); 
   const isMatch = (cronValue, dateValue) => {
       return cronValue === '*' || +cronValue === dateValue;
   };
   return isMatch(cronMinute, minute) &&
          isMatch(cronHour, hour) &&
          isMatch(cronDay, day) &&
          isMatch(cronMonth, month) &&
          isMatch(cronWeekday, weekday);
}
matchCron('* * * 2 *', new Date('2021-02-01 00:00:00'));