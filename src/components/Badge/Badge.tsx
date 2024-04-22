import * as S from './styles';
import { BadgeProps } from './types';

export function Badge({
  className,
  badgeTheme = 'primary',
  title,
  children,
}: BadgeProps) {
  return (
    <S.BadgeContainer
      className={className}
      badgeTheme={badgeTheme}
      title={title}
    >
      {children}
    </S.BadgeContainer>
  );
}
