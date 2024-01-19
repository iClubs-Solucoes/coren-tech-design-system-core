import { useCallback, useState } from 'react';

import { Button } from 'primitives';

import { Children, Step } from './components';
import * as S from './styles';
import { Steps, WizardProps } from './types';

export function Wizard({
  steps,
  blockCancel,
  onChangeStep,
  onCancel,
}: WizardProps) {
  const [currentStep, setCurrentStep] = useState(Steps.FIRST);

  const nextStep = currentStep + 1;
  const blockContinue = steps[nextStep]?.disabled;

  const handleGoToNextStep = useCallback((nextStep: number) => {
    onChangeStep?.();
    setCurrentStep(nextStep);
  }, []);

  const renderHeader = useCallback(() => {
    return steps.map((steps, index) => {
      const { name, preIcon, disabled } = steps;

      const isCurrentStep = index === currentStep;
      const stepNumber = index + 1;

      const props = {
        name,
        preIcon: preIcon || stepNumber,
        currentStep: isCurrentStep,
        disabled: disabled,
        onClick: () => handleGoToNextStep(index),
      };

      return <Step key={name} {...props} />;
    });
  }, [currentStep]);

  const renderBody = useCallback(() => {
    return steps.map((step, index) => {
      const { children } = step;
      const isCurrentStep = index === currentStep;

      if (children) {
        return (
          <Children key={step.name} currentChildren={isCurrentStep}>
            {step.children}
          </Children>
        );
      } else {
        return '';
      }
    });
  }, [currentStep]);

  const header = renderHeader();

  const body = renderBody();

  return (
    <S.WizardContainer>
      <S.Header>{header}</S.Header>

      <S.Body>{body}</S.Body>

      <S.Footer>
        <Button
          buttonTheme="fifth"
          disabledBtn={blockCancel}
          onClick={onCancel}
        >
          Cancelar
        </Button>

        <S.SquareButton
          buttonTheme="third"
          disabledBtn={blockContinue}
          onClick={() => handleGoToNextStep(currentStep + 1)}
        >
          Continuar
        </S.SquareButton>
      </S.Footer>
    </S.WizardContainer>
  );
}
