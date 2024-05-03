import { useState } from 'react';
import ReactDatePicker, {
  ReactDatePickerCustomHeaderProps,
  registerLocale,
} from 'react-datepicker';

import { ptBR } from 'date-fns/locale/pt-BR';

import { Day, DefaultInput, Header, TimeInput } from './components';
import * as S from './styles';
import { DatePickerProps } from './types';

registerLocale('pt-BR', ptBR);

export function DatePicker({
  className,
  startDate = new Date(),
  selectedDate,
  minDate,
  maxDate,
  input,
  timeInputLabel = 'Horário',
  dropdownYears,
  inputLabel,
  inputPlaceholder,
  inputValue,
  timeInput,
  onChange,
  onOpenChange,
  ...reactDatePickerProps
}: DatePickerProps) {
  const [open, setOpen] = useState(true);
  const [time, setTime] = useState('');

  const handleWeekDayFormatation = (nameOfDay: string) => {
    const firstLetter = nameOfDay[0];
    return firstLetter.toUpperCase();
  };

  const handleInputClick = () => handleDatePickerOpeningChange(!open);

  const handleCustomHeaderRender = ({
    date,
    changeYear,
    decreaseMonth,
    increaseMonth,
  }: ReactDatePickerCustomHeaderProps) => (
    <Header
      date={date}
      minDate={minDate}
      maxDate={maxDate}
      selectedDate={selectedDate}
      dropdownYears={dropdownYears}
      changeYear={changeYear}
      decreaseMonth={decreaseMonth}
      increaseMonth={increaseMonth}
    />
  );

  const handleDayContentsRender = (dayOfMonth: number, date?: Date) => (
    <Day
      day={dayOfMonth}
      dayDate={date}
      monthBeenDisplayedDate={selectedDate || startDate}
    />
  );

  const handleDatePickerOpeningChange = (open: boolean) => {
    setOpen(open);
    onOpenChange?.(open);
  };

  const timeInputProps = timeInput
    ? {
        showTimeInput: true,
        customTimeInput: (
          <TimeInput value={time} disabled={!selectedDate} onChange={setTime} />
        ),
      }
    : undefined;

  const handleDateChange = (date: Date) => {
    if (date instanceof Date && !isNaN(date)) {
      onChange(date);
      // handleDatePickerOpeningChange(false);
    }
  };

  return (
    <S.DatePickerContainer className={className}>
      <S.InputContainer onClick={handleInputClick}>
        {input && input}

        {!input && inputLabel && inputPlaceholder && (
          <DefaultInput
            label={inputLabel}
            placeholder={inputPlaceholder}
            value={inputValue}
          />
        )}
      </S.InputContainer>

      <ReactDatePicker
        locale="pt-BR"
        {...reactDatePickerProps}
        startDate={startDate}
        selected={selectedDate}
        open={open}
        minDate={minDate}
        maxDate={maxDate}
        timeInputLabel={timeInputLabel}
        formatWeekDay={handleWeekDayFormatation}
        renderCustomHeader={handleCustomHeaderRender}
        renderDayContents={handleDayContentsRender}
        {...timeInputProps}
        onChange={handleDateChange}
      />
    </S.DatePickerContainer>
  );
}
