import { fireEvent, render, screen } from '@testing-library/react';
import { vi, describe, expect, it } from 'vitest';

import { Textarea } from './Textarea';

const handleChange = vi.fn();

describe('<Textarea />', () => {
  it('should render the component', () => {
    render(<Textarea label="Título" value="Test" />);

    expect(screen.getByLabelText(/Título/i)).toBeTruthy();
  });

  it('should writing the component', () => {
    render(<Textarea placeholder="Test" onChange={handleChange} />);

    fireEvent.change(screen.getByPlaceholderText(/Test/i), {
      target: {
        value: 'Test',
      },
    });

    expect(handleChange).toBeCalledWith('Test');
  });
});
