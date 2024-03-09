import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Subtitle } from './Subtitle';

describe('<Subtitle />', () => {
  it('should render the component', () => {
    render(<Subtitle text="Test" />);

    expect(screen.getByText(/Test/i)).toBeTruthy();
  });
});
