import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { Step } from './Step';

describe('<Step />', () => {
  const handleStepClick = vi.fn();

  const defaultProps = {
    preIcon: '1',
    name: 'Novo picolé',
    onClick: handleStepClick,
    currentStep: true,
  };

  const { preIcon, name, onClick } = defaultProps;

  it('should render the component', () => {
    render(<Step {...defaultProps} />);

    const icon = screen.getByText(new RegExp(preIcon, 'i'));
    const step = screen.getByText(new RegExp(name, 'i'));
    const arrow = screen.getByTestId('wizard-step-next-arrow-icon');

    expect(icon).toBeTruthy();
    expect(step).toBeTruthy();
    expect(arrow).toBeTruthy();
  });

  it('should call onClick when the step is clicked', () => {
    render(<Step {...defaultProps} />);

    const step = screen.getByText(new RegExp(name, 'i'));

    fireEvent.click(step);

    expect(onClick).toBeCalledTimes(1);
  });

  it('should render a next step', () => {
    const props = {
      ...defaultProps,
      currentStep: false,
    };

    render(<Step {...props} />);

    const icon = screen.getByText(new RegExp(preIcon, 'i'));
    const arrow = screen.getByTestId('wizard-step-next-arrow-icon');

    expect(icon).toBeTruthy();
    expect(arrow).toBeTruthy();
  });
});
