import * as S from './styles';
import { BadgeProps } from './types';

export function Badge({ className, title, children }: BadgeProps) {
  return (
    <S.BadgeContainer className={className} title={title}>
      {children}
    </S.BadgeContainer>
  );
}
