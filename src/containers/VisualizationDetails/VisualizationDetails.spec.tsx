import { render, screen } from '@testing-library/react';
import { createTestWithWrapper } from 'common/tests';
import { ScrollProvider } from 'hooks';
import { describe, expect, it } from 'vitest';

import { VisualizationDetails } from './VisualizationDetails';

describe('<VisualizationDetails />', () => {
  it('should render the component', () => {
    render(
      createTestWithWrapper(
        <VisualizationDetails>Test</VisualizationDetails>,
        ScrollProvider,
      ),
    );

    expect(screen.getByText(/Test/i)).toBeTruthy();
  });
});
