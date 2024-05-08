import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Day } from './Day';

describe('<Day />', () => {
  it('should render the component', () => {
    render(<Day />);

    expect(false).toBeTruthy();
  });
});
