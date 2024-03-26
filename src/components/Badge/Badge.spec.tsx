import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Badge } from './Badge';

describe('<Badge />', () => {
  const children = 'Badge';
  const title = 'Title';

  it('should render the component', () => {
    render(
      <Badge className="123" title={title}>
        {children}
      </Badge>,
    );

    const badge = screen.getByText(new RegExp(children, 'i'));

    expect(badge).toBeTruthy();
  });

  it('should have title property', () => {
    render(<Badge title={title}>{children}</Badge>);
    const badge = screen.getByText(new RegExp(children, 'i'));

    expect(badge).toHaveProperty('title', title);
  });

  it('should render without children', () => {
    render(<Badge title={title} />);
    const badge = screen.getByTitle(new RegExp(title, 'i'));

    expect(badge).toBeTruthy();
  });

  it('should render without title', () => {
    render(<Badge>{children}</Badge>);
    const badge = screen.getByText(new RegExp(children, 'i'));

    expect(badge).toBeTruthy();
  });

  it('should forward className to the DOM element', () => {
    render(<Badge className="123">{children}</Badge>);
    const badge = screen.getByText(new RegExp(children, 'i'));

    expect(badge.className).includes('123');
  });
});
