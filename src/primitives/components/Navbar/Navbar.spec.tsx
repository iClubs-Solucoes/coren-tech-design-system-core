import { render, screen } from '@testing-library/react';
import { ScrollProvider } from 'hooks';
import { describe, expect, it } from 'vitest';

import { Navbar } from './Navbar';
import { NavbarProps } from './types';

function renderComponent(props?: NavbarProps) {
  return render(
    <ScrollProvider>
      <Navbar {...props}>Test</Navbar>
    </ScrollProvider>,
  );
}

describe('<Navbar />', () => {
  it('should render the component', () => {
    renderComponent();

    expect(screen.getByText(/Test/i)).toBeTruthy();
  });

  it('should forward className to the DOM element', () => {
    renderComponent({ className: '123' });

    const navbar = screen.getByText(/Test/i);

    expect(navbar.className).includes('123');
  });
});
