import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Title } from './Title';

describe('<Title />', () => {
  it('should render the component', () => {
    render(<Title text="Test" />);

    expect(screen.getByText(/Test/i)).toBeTruthy();
  });
});
