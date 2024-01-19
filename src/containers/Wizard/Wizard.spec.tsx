import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { Step } from './types';
import { Wizard } from './Wizard';

const handleStepChange = vi.fn();

const steps: Step[] = [
  {
    preIcon: '1',
    name: 'Novo picolé',
    children: <p style={{ backgroundColor: 'blue' }}>123</p>,
    onClick: handleStepChange,
  },
];

describe('<Wizard />', () => {
  it('should render component', () => {
    render(<Wizard steps={steps} />);

    for (const step of steps) {
      const stepName = screen.getByText(new RegExp(step.name!, 'i'));
      expect(stepName).toBeTruthy();
    }
  });
});
