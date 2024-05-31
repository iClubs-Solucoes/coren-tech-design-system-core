import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Label } from './Label';

describe('<Label />', () => {
  const children = 'Label';

  it('should render the component', () => {
    render(<Label>{children}</Label>);
    const label = screen.getByText(new RegExp(children, 'i'));

    expect(label).toBeTruthy();
  });

  it('should forward className to the DOM element', () => {
    render(<Label className="123">{children}</Label>);
    const label = screen.getByText(new RegExp(children, 'i'));

    expect(label.className).includes('123');
  });
});
