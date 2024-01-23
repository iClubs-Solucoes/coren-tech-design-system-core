import { fireEvent, render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { Step, WizardProps } from './types';
import { Wizard } from './Wizard';

describe('<Wizard />', () => {
  const handleStepChange = vi.fn();
  const handleCancelClick = vi.fn();
  const handleWizardConclusion = vi.fn();

  const steps: Step[] = [
    {
      name: 'Novo picolé',
      children: <p>Nomeie seu picolé</p>,
      onClick: handleStepChange,
    },
    {
      name: 'Escolha o sabor',
      children: <p>Chocolate, baunilha ou cereja?</p>,
      onClick: handleStepChange,
    },
  ];

  const defaultProps: WizardProps = {
    steps,
    onCancel: handleCancelClick,
    onChangeStep: handleStepChange,
    onCompletion: handleWizardConclusion,
  };

  const {
    steps: wizardSteps,
    onChangeStep,
    onCancel,
    onCompletion,
  } = defaultProps;

  beforeEach(() => {
    handleStepChange.mockClear();
    handleWizardConclusion.mockClear();
  });

  it('should render component', () => {
    render(<Wizard {...defaultProps} />);

    for (const [index, step] of wizardSteps.entries()) {
      const stepNumber = (index + 1).toString();
      const stepNumberEl = screen.getByText(new RegExp(stepNumber, 'i'));

      const stepName = screen.getByText(new RegExp(step.name!, 'i'));

      expect(stepNumberEl).toBeTruthy();
      expect(stepName).toBeTruthy();
    }

    const firstStep = steps[0];

    const children = (firstStep.children as JSX.Element).props.children;
    const childrenEl = screen.getByText(new RegExp(children, 'i'));

    const continueButton = screen.getByText(/Continuar/i);
    const cancelButton = screen.getByText(/Cancelar/i);

    expect(childrenEl).toBeTruthy();
    expect(continueButton).toBeTruthy();
    expect(cancelButton).toBeTruthy();
  });

  it('should handle page change by continue button', () => {
    render(<Wizard {...defaultProps} />);

    const firstStep = steps[0];
    const secondStep = steps[1];

    const firstChildren = (firstStep.children as JSX.Element).props.children;
    const firstChildrenEl = screen.getByText(new RegExp(firstChildren, 'i'));

    expect(firstChildrenEl).toBeTruthy();

    const continueButton = screen.getByText(/Continuar/i);
    fireEvent.click(continueButton);

    const secondChildren = (secondStep.children as JSX.Element).props.children;
    const secondChildrenEl = screen.getByText(new RegExp(secondChildren, 'i'));

    expect(secondChildrenEl).toBeTruthy();
  });

  it('should handle page change by step name on wizard header', () => {
    render(<Wizard {...defaultProps} />);

    const firstStep = steps[0];
    const secondStep = steps[1];

    const firstChildren = (firstStep.children as JSX.Element).props.children;
    const firstChildrenEl = screen.getByText(new RegExp(firstChildren, 'i'));

    expect(firstChildrenEl).toBeTruthy();

    const secondStepName = screen.getByText(new RegExp(secondStep.name!, 'i'));
    fireEvent.click(secondStepName);

    const secondChildren = (secondStep.children as JSX.Element).props.children;
    const secondChildrenEl = screen.getByText(new RegExp(secondChildren, 'i'));

    expect(secondChildrenEl).toBeTruthy();
  });

  it('should handle continue click', async () => {
    render(<Wizard {...defaultProps} />);

    const continueButton = screen.getByText(/Continuar/i);
    fireEvent.click(continueButton);

    expect(onChangeStep).toBeCalledTimes(1);
    expect(onCompletion).not.toBeCalled();
  });

  it('should render a without children step', () => {
    const name = 'Step without Children';

    const withouChildrenStep = [{ name }];

    render(<Wizard steps={withouChildrenStep} />);

    const stepName = screen.getByText(new RegExp(name, 'i'));
    const continueButton = screen.getByText(/Continuar/i);
    const cancelButton = screen.getByText(/Cancelar/i);

    expect(stepName).toBeTruthy();
    expect(continueButton).toBeTruthy();
    expect(cancelButton).toBeTruthy();
  });

  it('should call onCancel when cancel button is clicked', () => {
    render(<Wizard {...defaultProps} />);

    const cancelButton = screen.getByText(/Cancelar/i);
    fireEvent.click(cancelButton);

    expect(onCancel).toBeCalledTimes(1);
  });

  it('should call onCompletion when continue button is clicked in the last step', () => {
    render(<Wizard {...defaultProps} />);

    const index = steps.length - 1;
    const lastStep = screen.getByText(new RegExp(steps[index].name!, 'i'));
    fireEvent.click(lastStep);

    handleStepChange.mockClear();

    const continueButton = screen.getByText(/Continuar/i);
    fireEvent.click(continueButton);

    expect(onCompletion).toBeCalledTimes(1);
    expect(onChangeStep).not.toBeCalled();
  });
});
