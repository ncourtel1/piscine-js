function sunnySunday(date)
{
    const baseDate = new Date('0001-01-01'), daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return daysOfWeek[(Math.floor((date - baseDate) / (1000 * 60 * 60 * 24))) % 6];
}