import { FC, MouseEvent } from "react";

type Props = {
  onSelect: (day: string) => void;
};

type Month = {
  id: string;
  name: string;
};

const MONTHS: Month[] = [
  { id: "1", name: "Январь" },
  { id: "2", name: "Февраль" },
  { id: "3", name: "Март" },
  { id: "4", name: "Апрель" },
  { id: "5", name: "Май" },
  { id: "6", name: "Июнь" },
  { id: "7", name: "Июль" },
  { id: "8", name: "Август" },
  { id: "9", name: "Сентябрь" },
  { id: "10", name: "Октябрь" },
  { id: "11", name: "Ноябрь" },
  { id: "12", name: "Декабрь" },
];

const MonthSelector: FC<Props> = ({ onSelect }) => {
  return (
    <select>
      {MONTHS.map(({ id, name }) => (
        <option
          id={id}
          key={id}
          onClick={(e: MouseEvent<HTMLOptionElement>) =>
            onSelect(e.currentTarget.id)
          }
        >
          {name}
        </option>
      ))}
    </select>
  );
};

export default MonthSelector;
