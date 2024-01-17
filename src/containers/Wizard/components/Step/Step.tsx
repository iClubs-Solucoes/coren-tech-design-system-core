import * as S from './styles';
import { StepProps } from './types';

export function Step({ preIcon, name, currentStep, onClick }: StepProps) {
  const displayNumber =
    typeof preIcon === 'string' || typeof preIcon === 'number';

  return (
    <S.StepContainer onClick={onClick}>
      <S.PreIcon>
        {displayNumber && (
          <S.Number currentStep={currentStep}>{preIcon}</S.Number>
        )}

        {!displayNumber && <S.PreIconContainer>{preIcon}</S.PreIconContainer>}
      </S.PreIcon>

      <S.Name currentStep={currentStep}>{name}</S.Name>

      <S.NextArrow data-testid="wizard-step-next-arrow-icon" />
    </S.StepContainer>
  );
}
