import * as S from './styles';
import { BoldProps } from './types';

export function Bold({ children, className }: BoldProps) {
  return <S.BoldContainer className={className}>{children}</S.BoldContainer>;
}
