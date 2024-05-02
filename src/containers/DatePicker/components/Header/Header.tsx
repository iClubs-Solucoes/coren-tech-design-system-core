import { monthNames } from 'common/mocks';
import { SelectValue } from 'components/Select/types';
import { MONTHS } from 'models';

import * as S from './styles';
import { HeaderProps } from './types';

export function Header({
  className,
  date,
  minDate,
  maxDate,
  selectedDate,
  dropdownYears,
  changeYear,
  decreaseMonth,
  increaseMonth,
}: HeaderProps) {
  const currentYear = date.getFullYear();
  const currentMonth = date.getMonth();

  const handleLastPreviousMonthDay = () => {
    const firstCurrentMonthDay = new Date(currentYear, currentMonth, 1);

    const lastPreviousMonthDay = new Date(firstCurrentMonthDay);
    lastPreviousMonthDay.setDate(0);

    return lastPreviousMonthDay;
  };

  const handleFirstNextMonthDay = () => {
    let nextMonth = currentMonth + 1;
    let nextYear = currentYear;

    if (nextMonth === MONTHS.DECEMBER + 1) {
      nextMonth = MONTHS.JANUARY;
      nextYear++;
    }

    const firstNextMonthDay = new Date(nextYear, nextMonth, 1);

    return firstNextMonthDay;
  };

  const lastPreviousMonthDay = handleLastPreviousMonthDay();
  const firstNextMonthDay = handleFirstNextMonthDay();

  const invalidPreviousMonth = minDate ? lastPreviousMonthDay < minDate : false;
  const invalidNextMonth = maxDate ? firstNextMonthDay > maxDate : false;

  const yearDropdownItems = dropdownYears.map(year => {
    const stringYear = year.toString();

    return {
      value: stringYear,
      label: stringYear,
    };
  });

  const currentDropdownItem = {
    value: String(currentYear),
    label: String(currentYear),
  };

  const handleYearChange = (yearDropdownItem: SelectValue) =>
    changeYear(Number(yearDropdownItem.value));

  return (
    <S.HeaderContainer className={className}>
      <S.SelectYear
        selectTheme="secondary"
        menuStyle={{ marginTop: '0.8rem', height: '25.6rem' }}
        values={currentDropdownItem}
        items={yearDropdownItems}
        filled={!!selectedDate}
        onChange={handleYearChange}
      />

      <S.MonthContainer>
        <S.PreviousMonth
          icon={<S.PreviousArrow />}
          disabledBtn={invalidPreviousMonth}
          onClick={decreaseMonth}
        />

        <S.Month>{monthNames[currentMonth]}</S.Month>

        <S.NextMonth
          icon={<S.NextArrow />}
          disabledBtn={invalidNextMonth}
          onClick={increaseMonth}
        />
      </S.MonthContainer>
    </S.HeaderContainer>
  );
}
