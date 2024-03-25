import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Title } from './Title';

describe('<Title />', () => {
  const children = 'Title';

  it('should render the component', () => {
    render(<Title>{children}</Title>);
    const title = screen.getByText(new RegExp(children, 'i'));

    expect(title).toBeTruthy();
  });

  it('should forward className to the DOM element', () => {
    render(<Title className="123">{children}</Title>);
    const title = screen.getByText(new RegExp(children, 'i'));

    expect(title.className).includes('123');
  });
});
