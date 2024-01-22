import { render, screen } from '@testing-library/react';
import {vi, describe, expect, it} from 'vitest'

import { SelectItem } from './SelectItem';

describe('<SelectItem />', () => {
  it('should render the component', () => {
    render(<SelectItem text="Test" />);

    expect(screen.getByText(/Test/i)).toBeTruthy();
  });
});
