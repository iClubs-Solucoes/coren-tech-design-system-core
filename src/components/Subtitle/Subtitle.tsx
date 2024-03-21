import * as S from './styles';
import { SubtitleProps } from './types';

export function Subtitle({ children, className }: SubtitleProps) {
  return (
    <S.SubtitleContainer className={className}>{children}</S.SubtitleContainer>
  );
}
