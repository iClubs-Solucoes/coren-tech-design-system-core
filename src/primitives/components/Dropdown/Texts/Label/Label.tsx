import * as S from './styles';
import { LabelProps } from './types';

export function Label({ className, inputId, children }: LabelProps) {
  return (
    <S.LabelContainer className={className} htmlFor={inputId}>
      {children}
    </S.LabelContainer>
  );
}
