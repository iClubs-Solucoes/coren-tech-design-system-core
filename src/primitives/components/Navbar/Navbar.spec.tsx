import { render, screen } from '@testing-library/react';
import { ScrollProvider } from 'hooks';
import { describe, expect, it } from 'vitest';

import { Navbar } from './Navbar';

describe('<Navbar />', () => {
  it('should render the component', () => {
    render(
      <ScrollProvider>
        <Navbar>Test</Navbar>
      </ScrollProvider>,
    );

    expect(screen.getByText(/Test/i)).toBeTruthy();
  });
});
