import { ReactElement } from 'react';

export type DateType = Date | null | undefined;

export type DatePickerProps = {
  className?: string;
  minDate?: DateType;
  maxDate?: DateType;
  customInput?: ReactElement | string;
  timeInputLabel?: string;
  startDate?: DateType;
  selectedDate?: DateType;
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
