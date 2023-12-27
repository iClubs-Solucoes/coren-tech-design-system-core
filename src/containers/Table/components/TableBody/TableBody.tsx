import * as S from './styles';
import { TableBodyProps } from './types';

export function TableBody({ children, ...styleProps }: TableBodyProps) {
  return <S.Container {...styleProps}>{children}</S.Container>;
}
