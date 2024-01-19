import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { HourglassLoading } from './HourglassLoading';

describe('<Loading />', () => {
  it('should render the component', () => {
    render(<HourglassLoading text="Test" />);

    expect(screen.getByText(/Test/i)).toBeTruthy();
  });
});
