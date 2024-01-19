import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Children } from './Children';

describe('<Children />', () => {
  it('should render the component', () => {
    render(<Children currentChildren>Children</Children>);

    expect(screen.getByText(/Children/i)).toBeTruthy();
  });
});
