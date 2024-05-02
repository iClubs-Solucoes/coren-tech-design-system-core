import { ReactElement } from 'react';
import { ReactDatePickerProps } from 'react-datepicker';

export type DatePickerProps = ReactDatePickerProps & {
  className?: string;
  startDate?: Date;
  minDate?: Date;
  maxDate?: Date;
  openingTrigger?: ReactElement | string;
  timeInputLabel?: string;
  selectedDate: Date;
  dropdownYears: number[];
  setSelectedDate: (date: Date) => void;
};
