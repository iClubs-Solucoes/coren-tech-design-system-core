import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { ProgressBar } from './ProgressBar';

describe('<ProgressBar />', () => {
  it('should render the component', () => {
    render(<ProgressBar progress={50} />);

    expect(screen.getByTestId('progress-bar')).toBeTruthy();
  });

  it("should don't render the component if progress undefined", () => {
    render(<ProgressBar progress={undefined} />);

    expect(screen.queryByTestId('progress-bar')).toBeFalsy();
  });
});
