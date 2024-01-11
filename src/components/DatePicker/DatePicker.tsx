import { useState } from 'react';
import ReactDatePicker, { registerLocale } from 'react-datepicker';

import ptBR from 'date-fns/locale/pt-BR';

import * as S from './styles';

registerLocale('ptBR', ptBR);

import 'react-datepicker/dist/react-datepicker.css';

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

export function DatePicker() {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <S.DatePickerContainer>
      <ReactDatePicker
        locale="ptBR"
        selected={startDate}
        onChange={date => setStartDate(date)}
      />
    </S.DatePickerContainer>
  );
}
