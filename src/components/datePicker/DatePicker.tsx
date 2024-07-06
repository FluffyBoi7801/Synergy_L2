import { FC, useState } from "react";
import classes from "./DatePicker.module.scss";
import { DaySelector, MonthSelector, YearSelector } from "./ui";
import { getDayOfWeek, getUserAge, isLeapYear } from "../../utils";

const DatePicker: FC = () => {
  const [selectedDay, setSelectedDay] = useState<string | null>(null);
  const [selectedMonth, setSelectedMonth] = useState<string | null>(null);
  const [selectedYear, setSelectedYear] = useState<string | null>(null);
  const [message, setMessage] = useState<string>("");

  const isValid = selectedDay && selectedMonth && selectedYear;

  const handleSubmit = () => {
    if (selectedDay && selectedMonth && selectedYear) {
      setMessage(
        `Это был(-а): ${getDayOfWeek(selectedDay, selectedMonth, selectedYear)}, 
        ${selectedYear} год был ${isLeapYear(selectedYear) ? "" : "не"} високосным, 
        Ваш возраст: ${getUserAge(selectedDay, selectedMonth, selectedYear)}`
      );
    }
  };

  const handleDaySelect = (day: string) => {
    setSelectedDay(day);
  };

  const handleMonthSelect = (day: string) => {
    setSelectedMonth(day);
  };

  const handleYearSelect = (day: string) => {
    setSelectedYear(day);
  };

  return (
    <div className={classes.datePicker}>
      <button
        className={classes.datePicker__button}
        onClick={handleSubmit}
        disabled={!isValid}
      >
        Подтвердить
      </button>
      <div className={classes.datePicker__container}>
        <DaySelector onSelect={handleDaySelect} />
        <MonthSelector onSelect={handleMonthSelect} />
        <YearSelector onSelect={handleYearSelect} />
      </div>
      {!isValid && <p>Необходимо выбрать дату!</p>}
      {message && (
        <p className={classes.datePicker__messageContainer}>{message}</p>
      )}
    </div>
  );
};

export default DatePicker;
