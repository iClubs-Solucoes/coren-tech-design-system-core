import { ReactElement } from 'react';
import { ReactDatePickerProps } from 'react-datepicker';

export type DatePickerProps = ReactDatePickerProps & {
  className?: string;
  startDate?: Date;
  minDate?: Date;
  maxDate?: Date;
  openingTrigger?: ReactElement | string;
  selectedDate: Date;
  setSelectedDate: (date: Date) => void;
};
