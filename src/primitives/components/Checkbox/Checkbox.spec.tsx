import { fireEvent, render, screen } from '@testing-library/react';
import { vi, describe, expect, it } from 'vitest';

import { Checkbox } from './Checkbox';

const handleChange = vi.fn();

describe('<Checkbox />', () => {
  it('should render the component', () => {
    render(<Checkbox label="Checkbox" />);

    expect(screen.getByText(/Checkbox/i)).toBeTruthy();
  });

  it('should select checkbox', () => {
    render(<Checkbox label="Checkbox" onChange={handleChange} />);

    fireEvent.click(screen.getByLabelText('Checkbox'));

    expect(screen.getByText(/Checkbox/i)).toBeTruthy();
    expect(handleChange).toBeCalledWith(true);
  });
});
