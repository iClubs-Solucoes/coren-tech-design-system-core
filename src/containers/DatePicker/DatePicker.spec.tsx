import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { DatePicker } from './DatePicker';

describe('<DatePicker />', () => {
  it('should render the component', () => {
    render(<DatePicker />);

    expect(false).toBeTruthy();
  });
});
