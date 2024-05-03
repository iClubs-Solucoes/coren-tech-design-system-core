import { ReactElement } from 'react';
import { ReactDatePickerProps } from 'react-datepicker';

export type DatePickerProps = ReactDatePickerProps & {
  className?: string;
  startDate?: Date;
  minDate?: Date;
  maxDate?: Date;
  input?: ReactElement | string;
  timeInputLabel?: string;
  selectedDate: Date;
  dropdownYears: number[];
  inputLabel?: string;
  inputPlaceholder?: string;
  inputValue?: string;
  timeInput?: boolean;
  onChange?: (date: Date) => void;
  onOpenChange?: (open: boolean) => void;
};
