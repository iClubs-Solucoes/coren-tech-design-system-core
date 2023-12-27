import { TableHeaderRowProps } from './interfaces';
import * as S from './styles';

export function TableHeaderRow({
  children,
  displayLine = true,
  ...styleProps
}: TableHeaderRowProps) {
  return (
    <>
      <S.Container {...styleProps}>{children}</S.Container>
      {displayLine && <S.Line />}
    </>
  );
}
