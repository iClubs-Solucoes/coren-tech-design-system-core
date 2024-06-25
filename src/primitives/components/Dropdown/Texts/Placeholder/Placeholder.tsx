import * as S from './styles';
import { PlaceholderProps } from './types';

export function Placeholder({ className, children }: PlaceholderProps) {
  return (
    <S.PlaceholderContainer className={className}>
      {children}
    </S.PlaceholderContainer>
  );
}
