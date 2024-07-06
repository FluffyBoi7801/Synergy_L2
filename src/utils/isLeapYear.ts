export const isLeapYear = (year: string) => {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
};
