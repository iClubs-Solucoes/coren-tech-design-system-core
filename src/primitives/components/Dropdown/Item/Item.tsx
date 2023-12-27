import * as S from './styles';
import { ItemProps } from './types';

export function Item({ children, ...styleProps }: ItemProps) {
  return <S.Container {...styleProps}>{children}</S.Container>;
}
