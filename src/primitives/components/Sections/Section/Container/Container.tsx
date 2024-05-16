import * as S from './styles';
import { ContainerProps } from './types';

export function Container({ className, children }: ContainerProps) {
  return (
    <S.ContainerContainer className={className}>
      {children}
    </S.ContainerContainer>
  );
}
