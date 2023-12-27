import * as S from './styles';
import { TableCellProps } from './types';

export function TableCell({ children, ...styleProps }: TableCellProps) {
  return <S.Container {...styleProps}>{children}</S.Container>;
}
