import * as S from './styles';
import { ValueProps } from './types';

export function Value({ className, children }: ValueProps) {
  return <S.ValueContainer className={className}>{children}</S.ValueContainer>;
}
