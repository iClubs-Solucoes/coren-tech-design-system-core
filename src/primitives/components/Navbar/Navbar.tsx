import * as S from './styles';
import { NavbarProps } from './types';

export function Navbar({ className, children, ...styleProps }: NavbarProps) {
  return (
    <S.Container className={className} {...styleProps}>
      {children}
    </S.Container>
  );
}
