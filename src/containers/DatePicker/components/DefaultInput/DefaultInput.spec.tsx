import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { DefaultInput } from './DefaultInput';

describe('<DefaultInput />', () => {
  it('should render the component', () => {
    render(<DefaultInput />);

    expect(false).toBeTruthy();
  });
});
