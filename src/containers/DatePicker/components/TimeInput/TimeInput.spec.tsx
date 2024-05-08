import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { TimeInput } from './TimeInput';

describe('<TimeInput />', () => {
  it('should render the component', () => {
    render(<TimeInput />);

    expect(false).toBeTruthy();
  });
});
