import * as S from './styles';
import { DayProps } from './types';

export function Day({
  className,
  day,
  dayDate,
  monthBeenDisplayedDate,
}: DayProps) {
  const handleNotCurrentMonthDayVerification = () => {
    if (!dayDate) return;

    const currentMonth = monthBeenDisplayedDate.getMonth();
    const dayMonth = dayDate.getMonth();

    return currentMonth !== dayMonth;
  };

  const notCurrentMonthDay = handleNotCurrentMonthDayVerification();

  return (
    <S.DayContainer
      className={className}
      notCurrentMonthDay={notCurrentMonthDay}
    >
      {day}
    </S.DayContainer>
  );
}
