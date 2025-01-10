function firstDayWeek(week, year)
{
   const date = new Date(`${year}-01-01`);
   date.setDate(date.getDate() + (7 * (week - 1)));
   const day = date.getDay(), diff = (day === 0 ? -6 : 1 - day);
   date.setDate(date.getDate() + diff);
   if (date.getFullYear() !== parseInt(year))
   {
      date.setFullYear(year);
      date.setDate(1);
      date.setMonth(0);
   }
   const dd = String(date.getDate()).padStart(2, '0'), mm = String(date.getMonth() + 1).padStart(2, '0'), yyyy = String(date.getFullYear()).padStart(4, '0');
   return `${dd}-${mm}-${yyyy}`;
}