import * as S from './styles';
import { CardProps } from './types';

export function Card({ children, onClick, ...styleProps }: CardProps) {
  return (
    <S.Container onClick={onClick} {...styleProps}>
      {children}
    </S.Container>
  );
}
