import * as S from './styles';
import { TableProps } from './types';

export function Table({ children, className, scroll }: TableProps) {
  return (
    <S.Container className={className} scroll={scroll}>
      {children}
    </S.Container>
  );
}
