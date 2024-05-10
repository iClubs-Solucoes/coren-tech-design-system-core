import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Bold } from './Bold';

describe('<Bold />', () => {
  const children = 'Bold';

  it('should render the component', () => {
    render(<Bold>{children}</Bold>);
    const title = screen.getByText(new RegExp(children, 'i'));

    expect(title).toBeTruthy();
  });

  it('should forward className to the DOM element', () => {
    render(<Bold className="123">{children}</Bold>);
    const title = screen.getByText(new RegExp(children, 'i'));

    expect(title.className).includes('123');
  });
});
