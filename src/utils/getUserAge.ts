export const getUserAge = (day: string, month: string, year: string) => {
  const date = new Date(Number(year), month - 1, Number(day));

  return new Date(new Date(Date.now()) - date).getFullYear() - 1970;
};
