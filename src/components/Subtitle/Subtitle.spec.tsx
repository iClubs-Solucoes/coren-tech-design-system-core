import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Subtitle } from './Subtitle';

describe('<Subtitle />', () => {
  const children = 'Subtitle';

  it('should render the component', () => {
    render(<Subtitle>{children}</Subtitle>);
    const subtitle = screen.getByText(new RegExp(children, 'i'));

    expect(subtitle).toBeTruthy();
  });

  it('should forward className to the DOM element', () => {
    render(<Subtitle className="123">{children}</Subtitle>);
    const subtitle = screen.getByText(new RegExp(children, 'i'));

    expect(subtitle.className).includes('123');
  });
});
