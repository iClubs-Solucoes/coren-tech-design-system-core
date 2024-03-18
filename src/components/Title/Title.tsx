import * as S from './styles';
import { TitleProps } from './types';

export function Title({ children }: TitleProps) {
  return <S.TitleContainer>{children}</S.TitleContainer>;
}
