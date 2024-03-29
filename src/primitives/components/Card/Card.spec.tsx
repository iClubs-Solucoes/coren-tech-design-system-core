import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Card } from './Card';

describe('<Card />', () => {
  it('should render the component', () => {
    render(<Card>Banana</Card>);

    expect(screen.getByText(/Banana/i)).toBeTruthy();
  });
});
