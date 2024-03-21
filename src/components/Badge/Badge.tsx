import * as S from './styles';
import { BadgeProps } from './types';

export function Badge({ children, className }: BadgeProps) {
  return <S.BadgeContainer className={className}>{children}</S.BadgeContainer>;
}
