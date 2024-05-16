import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Bold } from './Bold';

describe('<Bold />', () => {
  const children = 'Bold';

  it('should render the component', () => {
    render(<Bold>{children}</Bold>);
    const bold = screen.getByText(new RegExp(children, 'i'));

    expect(bold).toBeTruthy();
  });

  it('should forward className to the DOM element', () => {
    render(<Bold className="123">{children}</Bold>);
    const bold = screen.getByText(new RegExp(children, 'i'));

    expect(bold.className).includes('123');
  });
});
