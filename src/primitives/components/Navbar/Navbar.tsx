import * as S from './styles';
import { NavbarProps } from './types';

export function Navbar({ children, ...styleProps }: NavbarProps) {
  return <S.Container {...styleProps}>{children}</S.Container>;
}
