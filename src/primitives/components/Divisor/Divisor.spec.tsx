import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Divisor } from './Divisor';

describe('<Divisor />', () => {
  it('should render the component', () => {
    render(<Divisor />);

    expect(false).toBeTruthy();
  });
});
