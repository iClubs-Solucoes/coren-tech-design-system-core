import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { Step, WizardProps } from './types';
import { Wizard } from './Wizard';

const handleStepChange = vi.fn();
const handleCancelClick = vi.fn();
const handleChangeStep = vi.fn();

const steps: Step[] = [
  {
    name: 'Novo picolé',
    children: <p>Nomeie seu picolé</p>,
    onClick: handleStepChange,
  },
  {
    name: 'Escolha o sabor',
    children: <p>Chocolate, baunilha ou cereja?</p>,
    disabled: true,
    onClick: handleStepChange,
  },
];

const defaultProps: WizardProps = {
  steps,
  onCancel: handleCancelClick,
  onChangeStep: handleChangeStep,
};

const {
  steps: wizardSteps,
  onCancel,
  blockCancel,
  onChangeStep,
} = defaultProps;

describe('<Wizard />', () => {
  it('should render component', () => {
    render(<Wizard {...defaultProps} />);

    for (const step of wizardSteps) {
      const stepName = screen.getByText(new RegExp(step.name!, 'i'));
      expect(stepName).toBeTruthy();
    }
  });

  // it('should handle page change', () => {
  //   render(<Wizard {...defaultProps} />);

  //   const firstStep = screen.getByText(/Nomeie seu picolé/i);
  //   expect(firstStep).toBeTruthy();

  //   const continueButton = screen.getByText(/Continuar/i);
  //   fireEvent.click(continueButton);

  //   const secondStep = screen.getByText(/Chocolate, baunilha ou cereja\?/i);
  //   expect(secondStep).toBeTruthy();
  // });

  it('should handle continue click', async () => {
    render(<Wizard {...defaultProps} />);

    const continueButton = screen.getByText(/Continuar/i);
    fireEvent.click(continueButton);

    await waitFor(() => expect(onChangeStep).toBeTruthy(), {});
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
});
