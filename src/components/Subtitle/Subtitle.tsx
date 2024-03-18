import * as S from './styles';
import { SubtitleProps } from './types';

export function Subtitle({ children }: SubtitleProps) {
  return <S.SubtitleContainer>{children}</S.SubtitleContainer>;
}
