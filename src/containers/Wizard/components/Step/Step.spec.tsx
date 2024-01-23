import { fireEvent, render, screen } from '@testing-library/react';
import { ArrowLeftAltIcon } from 'common/assets/icons';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { Step } from './Step';

describe('<Step />', () => {
  const handleStepClick = vi.fn();

  const defaultProps = {
    preIcon: '1',
    name: 'Novo picolé',
    onClick: handleStepClick,
    currentStep: true,
  };

  beforeEach(() => handleStepClick.mockClear());

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
    render(<Step {...defaultProps} currentStep={false} />);

    const icon = screen.getByText(new RegExp(preIcon, 'i'));
    const arrow = screen.getByTestId('wizard-step-next-arrow-icon');

    expect(icon).toBeTruthy();
    expect(arrow).toBeTruthy();
  });

  it('should not call onClick when the step is disabled', () => {
    render(<Step {...defaultProps} disabled={true} />);

    const step = screen.getByText(new RegExp(name, 'i'));

    fireEvent.click(step);

    expect(onClick).not.toBeCalled();
  });

  it('should render with a number icon', () => {
    render(<Step {...defaultProps} preIcon={1} />);

    const icon = screen.getByText(new RegExp(preIcon, 'i'));

    expect(icon).toBeTruthy();
  });

  it('should render with a custom icon', () => {
    const testId = 'pre-icon';

    const preIcon = <ArrowLeftAltIcon data-testid={testId} />;

    render(<Step {...defaultProps} preIcon={preIcon} />);

    const icon = screen.getByTestId(testId);

    expect(icon).toBeTruthy();
  });

  it('should render without name', () => {
    render(<Step {...defaultProps} name={undefined} />);

    const step = screen.queryByText(new RegExp(name, 'i'));

    expect(step).toBeNull();
  });

  it('should render without icon', () => {
    render(<Step {...defaultProps} preIcon={undefined} />);

    const icon = screen.queryByTestId('wizard-step-pre-icon');

    expect(icon).toBeNull();
  });
});
