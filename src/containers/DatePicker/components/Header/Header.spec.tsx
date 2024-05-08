import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Header } from './Header';

describe('<Header />', () => {
  it('should render the component', () => {
    render(<Header />);

    expect(false).toBeTruthy();
  });
});
