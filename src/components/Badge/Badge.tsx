import * as S from './styles';
import { BadgeProps } from './types';

export function Badge({ children }: BadgeProps) {
  return <S.BadgeContainer>{children}</S.BadgeContainer>;
}
