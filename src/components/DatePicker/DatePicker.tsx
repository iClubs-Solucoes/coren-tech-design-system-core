import * as S from './styles';
import { DatePickerProps } from './types';
// import { DatePickerProps } from './types';
// import { registerLocale, setDefaultLocale } from 'react-datepicker';
// import { es } from 'date-fns/locale/pt';
// registerLocale('es', es);

export function DatePicker({ className, date, setDate }: DatePickerProps) {
  return (
    <S.DatePickerContainer
      className={className}
      startDate={date}
      onChange={setDate}
    />
  );
}
