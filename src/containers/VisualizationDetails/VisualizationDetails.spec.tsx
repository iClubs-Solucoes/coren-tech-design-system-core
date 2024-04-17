import { render, screen } from '@testing-library/react';
import { createTestWithWrapper } from 'common/tests';
import { ScrollProvider } from 'hooks';
import { describe, expect, it } from 'vitest';

import { VisualizationDetailsProps } from './types';
import { VisualizationDetails } from './VisualizationDetails';

function renderComponent(props?: VisualizationDetailsProps) {
  render(
    createTestWithWrapper(
      <VisualizationDetails {...props}>Test</VisualizationDetails>,
      ScrollProvider,
    ),
  );
}

describe('<VisualizationDetails />', () => {
  it('should render the component', () => {
    renderComponent();

    expect(screen.getByText(/Test/i)).toBeTruthy();
  });

  it('should forward className to the DOM element', () => {
    renderComponent({ className: '123', children: 'Test' });

    const visualizationDetails = screen.getByTestId(
      /visualization-details-container/i,
    );

    expect(visualizationDetails.className).includes('123');
  });
});
