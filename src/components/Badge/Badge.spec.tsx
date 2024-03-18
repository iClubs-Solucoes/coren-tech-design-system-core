import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Badge } from './Badge';

describe('<Badge />', () => {
  it('should render the component', () => {
    render(<Badge>Test</Badge>);

    expect(screen.getByText(/Test/i)).toBeTruthy();
  });
});
