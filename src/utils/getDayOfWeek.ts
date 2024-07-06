const DAYS_OF_WEEK: string[] = [
  "Воскресенье",
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
];

export const getDayOfWeek = (day: string, month: string, year: string) => {
  const date = new Date(Number(year), month - 1, Number(day));
  return DAYS_OF_WEEK[date.getDay()];
};
