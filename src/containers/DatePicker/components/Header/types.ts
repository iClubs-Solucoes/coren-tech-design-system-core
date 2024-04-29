import { ReactDatePickerCustomHeaderProps } from 'react-datepicker';

export type HeaderProps = ReactDatePickerCustomHeaderProps & {
  className?: string;
  minDate?: Date;
  maxDate?: Date;
};
