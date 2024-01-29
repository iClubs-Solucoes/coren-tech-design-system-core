import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { TextField } from './TextField';

describe('<TextField />', () => {
  it('should render the component', () => {
    render(<TextField placeholder="Test" />);

    expect(screen.getByPlaceholderText(/Test/i)).toBeTruthy();
  });

  it('should show error textfield label', () => {
    render(<TextField placeholder="Test" error labelErr="Error show" />);

    expect(screen.getByText(/Error show/i)).toBeTruthy();
  });

  it("should display hide if input's type is password", () => {
    render(<TextField type="password" />);

    const hide = screen.getByTestId('hidden-icon');
    expect(hide).toBeTruthy();
  });
});
