import { ReactElement } from 'react';
import { ReactDatePickerProps } from 'react-datepicker';

export type DatePickerProps = ReactDatePickerProps & {
  className?: string;
  minDate?: Date;
  maxDate?: Date;
  customInput?: ReactElement | string;
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
