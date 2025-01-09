let addWeek = (date) => {
   const epoch = new Date('0001-01-01');
   const diffMs = date - epoch;
   
   const dayEpoch = Math.floor(diffMs / (1000 * 60 * 60 * 24));
   const newWeekDay = dayEpoch % 14;

   const weekDays = [
      'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday',
      'secondMonday', 'secondTuesday', 'secondWednesday', 'secondThursday', 'secondFriday', 'secondSaturday', 'secondSunday'
   ];
   return weekDays[newWeekDay];
}

function timeTravel({date, hour, minute, second}){

   const newDate = new Date(date);
   newDate.setHours(hour);
   newDate.setMinutes(minute);
   newDate.setSeconds(second);

   return newDate;
}



console.log(addWeek(new Date('0001-01-08')));
console.log(timeTravel({
   date: new Date('2020-05-29 23:25:22'),
   hour: 21,
   minute: 22,
   second: 22,
 }).getTime(),
 new Date('2020-05-29 21:22:22').getTime(),
)