import * as S from './styles';
import { TitleProps } from './types';

export function Title({ children, className }: TitleProps) {
  return <S.TitleContainer className={className}>{children}</S.TitleContainer>;
}
