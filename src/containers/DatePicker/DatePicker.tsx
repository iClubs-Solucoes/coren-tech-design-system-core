import { useEffect, useState } from 'react';
import ReactDatePicker, { registerLocale } from 'react-datepicker';

import { ptBR } from 'date-fns/locale/pt-BR';
import { Dropdown } from 'primitives';

import { Day, Header } from './components';
import * as S from './styles';
import { DatePickerProps } from './types';

registerLocale('pt-BR', ptBR);

export function DatePicker({
  className,
  startDate = new Date(),
  selectedDate,
  minDate,
  maxDate,
  openingTrigger,
  setSelectedDate,
  ...reactDatePickerProps
}: DatePickerProps) {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    const dayNamesReplacement = {
      dom: 'D',
      seg: 'S',
      ter: 'T',
      qua: 'Q',
      qui: 'Q',
      sex: 'S',
      sab: 'S',
    };

    const dayNames = document.getElementsByClassName(
      'react-datepicker__day-name',
    ) as HTMLCollectionOf<HTMLDivElement>;

    for (const dayName of dayNames) {
      const name = dayName.innerText;
      dayName.innerText = dayNamesReplacement[name];
    }
  }, [open]);

  return (
    <S.DatePickerContainer className={className}>
      {/* <Dropdown.Root>
        <Dropdown.Trigger>
          <Dropdown.Field fieldTheme="primary">
            <>
              Blablabla
              <Dropdown.Arrow />
            </>
          </Dropdown.Field>
        </Dropdown.Trigger>
        <></>
      </Dropdown.Root> */}

      {openingTrigger && (
        <Dropdown.Trigger onClick={() => setOpen(!open)}>
          {openingTrigger}
        </Dropdown.Trigger>
      )}

      <ReactDatePicker
        {...reactDatePickerProps}
        locale="pt-BR"
        startDate={startDate}
        selected={selectedDate}
        open={open}
        minDate={minDate}
        maxDate={maxDate}
        renderCustomHeader={Header}
        renderDayContents={(dayOfMonth: number, date?: Date) => (
          <Day
            day={dayOfMonth}
            dayDate={date}
            monthBeenDisplayedDate={selectedDate || startDate}
          />
        )}
        onChange={setSelectedDate}
      />
    </S.DatePickerContainer>
  );
}
