import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { DatePicker } from './DatePicker';

describe('<DatePicker />', () => {
  it('should render the component', () => {
    render(<DatePicker />);

    expect(screen.getByText(/Test/i)).toBeTruthy();
  });
});
