import { useState } from 'react';
import ReactDatePicker, {
  ReactDatePickerCustomHeaderProps,
  registerLocale,
} from 'react-datepicker';

import { DATE_FORMATS } from 'common/enumerators';
import { formatDate } from 'common/utils';
import { SelectItem } from 'components';
import { ptBR } from 'date-fns/locale/pt-BR';

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
  timeInputLabel = 'Horário',
  setSelectedDate,
  dropdownYears,
  ...reactDatePickerProps
}: DatePickerProps) {
  const [open, setOpen] = useState(true);
  // const [time, setTime] = useState('');

  const handleWeekDayFormatation = (nameOfDay: string) => {
    const firstLetter = nameOfDay[0];
    return firstLetter.toUpperCase();
  };

  // const handleTimeChange = (newTime: string) => {
  //   console.log('newTime');
  //   console.log(newTime);
  //   setTime(newTime);

  //   const [hour, minute] = newTime.split(':');

  //   const newSelectedDate = new Date(selectedDate);
  //   newSelectedDate.setHours(Number(hour), Number(minute));

  //   setSelectedDate(newSelectedDate);
  // };

  const handleInputClick = () => setOpen(openNow => !openNow);

  const formatedDate = selectedDate
    ? formatDate(
        selectedDate,
        DATE_FORMATS.DAY_MONTH_4DIGITS_YEAR_AT_24SYSTEM_HOUR_MINUTES,
      )
    : '';

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

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
    setOpen(false);
  };

  return (
    <S.DatePickerContainer className={className}>
      <S.InputContainer onClick={handleInputClick}>
        {openingTrigger || (
          <SelectItem
            label="Data e horário de início*"
            placeholder="DD/MM/AAAA às 00:00"
            value={formatedDate}
            disabled={false}
            icon={<></>}
            onClick={handleInputClick}
          />
        )}
      </S.InputContainer>

      <ReactDatePicker
        {...reactDatePickerProps}
        locale="pt-BR"
        startDate={startDate}
        selected={selectedDate}
        open={open}
        minDate={minDate}
        maxDate={maxDate}
        timeInputLabel={timeInputLabel}
        formatWeekDay={handleWeekDayFormatation}
        renderCustomHeader={handleCustomHeaderRender}
        renderDayContents={handleDayContentsRender}
        // customTimeInput={<TimeInput value={time} onChange={handleTimeChange} />}
        showTimeInput
        onChange={handleDateChange}
      />
    </S.DatePickerContainer>
  );
}
