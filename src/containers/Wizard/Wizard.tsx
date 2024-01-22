import { useCallback, useState } from 'react';

import { Button } from 'primitives';

import { Children, Step } from './components';
import * as S from './styles';
import { Steps, WizardProps } from './types';

export function Wizard({
  steps,
  onChangeStep,
  onCancel,
  onCompletion,
}: WizardProps) {
  const [currentStep, setCurrentStep] = useState(Steps.FIRST);

  const nextStep = currentStep + 1;
  const blockContinue = steps[nextStep]?.disabled;

  const lastStep = steps.length - 1;
  const isLastStep = currentStep === lastStep;
  const continueClickFunction = isLastStep
    ? onCompletion
    : () => handleGoToNextStep(currentStep + 1);

  const handleGoToNextStep = useCallback(
    (nextStep: number) => {
      const goingInexistentStep = nextStep > lastStep;

      if (!goingInexistentStep) {
        setCurrentStep(nextStep);
        onChangeStep?.();
      }
    },
    [lastStep],
  );

  const renderHeader = useCallback(() => {
    return steps.map((steps, index) => {
      const { name, preIcon, disabled } = steps;

      const isCurrentStep = index === currentStep;
      const stepNumber = index + 1;

      const props = {
        name,
        preIcon: preIcon || stepNumber,
        currentStep: isCurrentStep,
        disabled,
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
        <Button buttonTheme="fifth" onClick={onCancel}>
          Cancelar
        </Button>

        <S.SquareButton
          buttonTheme="third"
          disabledBtn={blockContinue}
          onClick={continueClickFunction}
        >
          Continuar
        </S.SquareButton>
      </S.Footer>
    </S.WizardContainer>
  );
}
