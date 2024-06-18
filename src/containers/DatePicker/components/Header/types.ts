import { DatePickerSelectedDate } from 'containers/DatePicker/types';

export type HeaderProps = {
  className?: string;
  date: Date;
  minDate?: Date;
  maxDate?: Date;
  selectedDate?: DatePickerSelectedDate;
  dropdownYears: number[];
  changeYear: (year: number) => void;
  decreaseMonth: () => void;
  increaseMonth: () => void;
};
