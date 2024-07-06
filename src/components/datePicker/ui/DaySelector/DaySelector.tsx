import { FC, MouseEvent } from "react";

type Props = {
  onSelect: (day: string) => void;
};

const DaySelector: FC<Props> = ({ onSelect }) => {
  const days = Array.from({ length: 31 }, (_, day) => (day + 1).toString());

  return (
    <select>
      {days.map((day) => (
        <option
          id={day}
          key={day}
          onClick={(e: MouseEvent<HTMLOptionElement>) =>
            onSelect(e.currentTarget.id)
          }
        >
          {day}
        </option>
      ))}
    </select>
  );
};

export default DaySelector;
