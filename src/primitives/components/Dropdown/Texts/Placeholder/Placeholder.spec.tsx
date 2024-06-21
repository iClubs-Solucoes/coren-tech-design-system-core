import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Placeholder } from './Placeholder';

describe('<Placeholder />', () => {
  const children = 'Placeholder';

  it('should render the component', () => {
    render(<Placeholder>{children}</Placeholder>);
    const placeholder = screen.getByText(new RegExp(children, 'i'));

    expect(placeholder).toBeTruthy();
  });

  it('should forward className to the DOM element', () => {
    render(<Placeholder className="123">{children}</Placeholder>);
    const placeholder = screen.getByText(new RegExp(children, 'i'));

    expect(placeholder.className).includes('123');
  });
});
