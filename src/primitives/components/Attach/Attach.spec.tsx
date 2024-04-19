import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Attach } from './Attach';

describe('<Attach />', () => {
  it('should render the component', () => {
    render(<Attach />);

    expect(false).toBeTruthy();
  });
});
