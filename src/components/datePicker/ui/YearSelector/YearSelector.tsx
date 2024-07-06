import { FC, MouseEvent } from "react";

type Props = {
  yearFrom: number;
  yearTo: number;
  onSelect: (day: string) => void;
};

const YearSelector: FC<Props> = ({
  yearFrom = 1900,
  yearTo = 2101,
  onSelect,
}) => {
  const years = Array.from({ length: yearTo - yearFrom }, (_, year) =>
    (year + yearFrom).toString()
  );

  return (
    <select>
      {years.map((year) => (
        <option
          id={year}
          key={year}
          onClick={(e: MouseEvent<HTMLOptionElement>) =>
            onSelect(e.currentTarget.id)
          }
        >
          {year}
        </option>
      ))}
    </select>
  );
};

export default YearSelector;
