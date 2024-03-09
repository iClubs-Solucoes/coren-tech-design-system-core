import * as S from './styles';
import { SubtitleProps } from './types';

export function Subtitle({ text }: SubtitleProps) {
  return <S.SubtitleContainer>{text}</S.SubtitleContainer>;
}
