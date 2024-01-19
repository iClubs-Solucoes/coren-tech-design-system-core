import * as S from './styles';
import { StepProps } from './types';

export function Step({
  preIcon,
  name,
  currentStep,
  disabled,
  onClick,
}: StepProps) {
  const displayNumber =
    typeof preIcon === 'string' || typeof preIcon === 'number';

  return (
    <S.StepContainer
      currentStep={currentStep}
      disabled={disabled}
      onClick={onClick}
    >
      {preIcon && displayNumber && (
        <S.PreIcon>
          <S.Number currentStep={currentStep}>{preIcon}</S.Number>
        </S.PreIcon>
      )}

      {preIcon && !displayNumber && (
        <S.PreIconContainer>{preIcon}</S.PreIconContainer>
      )}

      {name && <S.Name currentStep={currentStep}>{name}</S.Name>}

      <S.NextArrow data-testid="wizard-step-next-arrow-icon" />
    </S.StepContainer>
  );
}
