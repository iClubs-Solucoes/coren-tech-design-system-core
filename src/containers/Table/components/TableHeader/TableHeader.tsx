import * as S from './styles';
import { TableHeaderProps } from './types';

export function TableHeader({ children, ...styleProps }: TableHeaderProps) {
  return <S.Container {...styleProps}>{children}</S.Container>;
}
