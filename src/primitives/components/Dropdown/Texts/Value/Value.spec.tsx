import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Value } from './Value';

describe('<Value />', () => {
  const children = 'Value';

  it('should render the component', () => {
    render(<Value>{children}</Value>);
    const value = screen.getByText(new RegExp(children, 'i'));

    expect(value).toBeTruthy();
  });

  it('should forward className to the DOM element', () => {
    render(<Value className="123">{children}</Value>);
    const value = screen.getByText(new RegExp(children, 'i'));

    expect(value.className).includes('123');
  });
});
