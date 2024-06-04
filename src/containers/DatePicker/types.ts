import { ReactElement } from 'react';

export type DatePickerSelectedDate = Date | null | undefined;

export type DatePickerProps = {
  className?: string;
  minDate?: Date;
  maxDate?: Date;
  customInput?: ReactElement | string;
  timeInputLabel?: string;
  selectedDate?: DatePickerSelectedDate;
  dropdownYears: number[];
  inputLabel?: string;
  inputPlaceholder?: string;
  inputValue?: string;
  timeInput?: boolean;
  onChange?: (date: Date) => void;
  onOpenChange?: (open: boolean) => void;
};

export type DatePickerContainerProps = {
  inputElement?: HTMLInputElement | null;
};
