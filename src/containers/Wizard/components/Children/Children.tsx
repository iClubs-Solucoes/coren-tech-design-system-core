import * as S from './styles';
import { ChildrenProps } from './types';

export function Children({ children, currentChildren }: ChildrenProps) {
  return (
    <S.ChildrenContainer currentChildren={currentChildren}>
      {children}
    </S.ChildrenContainer>
  );
}
