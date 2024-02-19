import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { TextField } from './TextField';

describe('<TextField />', () => {
  const successLabel = 'Está tudo certo!';

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

  it('should display success label if success properties are sent', () => {
    render(<TextField success={true} successLabel={successLabel} />);

    const label = screen.getByText(new RegExp(successLabel, 'i'));

    expect(label).toBeTruthy();
  });

  it('should not display success label if success is missing', () => {
    render(<TextField success={false} successLabel={successLabel} />);

    const label = screen.queryByText(new RegExp(successLabel, 'i'));

    expect(label).not.toBeTruthy();
  });

  it('should not display success label if it does not exists', () => {
    render(<TextField success={true} />);

    const label = screen.queryByText(new RegExp(successLabel, 'i'));

    expect(label).not.toBeTruthy();
  });
});
