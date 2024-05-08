export type HeaderProps = {
  className?: string;
  date: Date;
  minDate?: Date;
  maxDate?: Date;
  selectedDate?: Date;
  dropdownYears: number[];
  changeYear: (year: number) => void;
  decreaseMonth: () => void;
  increaseMonth: () => void;
};
