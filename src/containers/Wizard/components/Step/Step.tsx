import { useCallback } from 'react';

import * as S from './styles';
import { StepProps } from './types';

export function Step({
  preIcon,
  name,
  currentStep = true,
  disabled,
  onClick,
}: StepProps) {
  const displayNumber =
    typeof preIcon === 'string' || typeof preIcon === 'number';

  const handleClick = useCallback(() => {
    if (!disabled) onClick?.();
  }, [disabled]);

  return (
    <S.StepContainer
      currentStep={currentStep}
      disabled={disabled}
      onClick={handleClick}
    >
      {preIcon && displayNumber && (
        <S.PreIcon>
          <S.Number currentStep={currentStep}>{preIcon}</S.Number>
        </S.PreIcon>
      )}

      {preIcon && !displayNumber && (
        <S.PreIconContainer data-testid="wizard-step-pre-icon">
          {preIcon}
        </S.PreIconContainer>
      )}

      {name && <S.Name currentStep={currentStep}>{name}</S.Name>}

      <S.NextArrow data-testid="wizard-step-next-arrow-icon" />
    </S.StepContainer>
  );
}
