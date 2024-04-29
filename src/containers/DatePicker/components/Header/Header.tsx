import * as S from './styles';
import { HeaderProps } from './types';

export function Header({
  className,
  minDate, // maxDate,
}: HeaderProps) {
  const today = new Date();

  const minYear = minDate?.getFullYear() || today.getFullYear();
  // const maxYear = maxDate?.getFullYear() || today.getFullYear() + 15;

  const years = [2015, 2016, 2017, 2018, 2019, 2020];

  const selecItems = years.map(year => {
    const stringifiedYear = year.toString();

    return {
      value: stringifiedYear,
      label: stringifiedYear,
    };
  });

  // const handleYearChange = (item: ) => {
  //   const { value, label } = item;
  //   changeYear(value);
  // };

  return (
    <S.HeaderContainer className={className}>
      <S.SelectYear items={selecItems} /*onChange={handleYearChange}*/ />
    </S.HeaderContainer>
  );
}
