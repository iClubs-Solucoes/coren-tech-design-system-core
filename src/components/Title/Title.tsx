import * as S from './styles';
import { TitleProps } from './types';

export function Title({ text }: TitleProps) {
  return <S.TitleContainer>{text}</S.TitleContainer>;
}
