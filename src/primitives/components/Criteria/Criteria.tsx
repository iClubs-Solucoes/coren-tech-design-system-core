import * as S from './styles';
import { CriteriaProps } from './types';

export function Criteria({
  className,
  satisfactionRule,
  text,
  displayError,
}: CriteriaProps) {
  const error = !satisfactionRule;

  return (
    <S.CriteriaContainer data-testid="criteria-container" className={className}>
      {satisfactionRule && (
        <S.Satisfied data-testid="criteria-satisfied-icon" />
      )}

      {!satisfactionRule && (
        <S.NotSatisfied
          data-testid="criteria-not-satisfied-icon"
          error={displayError && error}
        />
      )}

      {text && <S.Text error={displayError && error}>{text}</S.Text>}
    </S.CriteriaContainer>
  );
}
