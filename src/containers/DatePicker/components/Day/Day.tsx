import { useRef } from 'react';

import * as S from './styles';
import { DayProps } from './types';

export function Day({
  className,
  day,
  dayDate,
  monthDisplayedDate,
  disabled,
  selected,
}: DayProps) {
  const ref = useRef<HTMLButtonElement>(null);

  const handleNotCurrentMonthDayVerification = () => {
    if (!dayDate) return;

    const currentMonth = monthDisplayedDate.getMonth();
    const dayMonth = dayDate.getMonth();

    return currentMonth !== dayMonth;
  };

  const notCurrentMonthDay = handleNotCurrentMonthDayVerification();

  const parent = ref.current?.parentNode as HTMLDivElement;

  const disabledDay =
    disabled || parent?.classList.contains('react-datepicker__day--disabled');

  const selectedDay =
    selected || parent?.classList.contains('react-datepicker__day--selected');

  return (
    <S.DayContainer
      ref={ref}
      className={className}
      disabled={disabledDay}
      selected={selectedDay}
      notCurrentMonthDay={notCurrentMonthDay}
    >
      {String(day)}
    </S.DayContainer>
  );
}
