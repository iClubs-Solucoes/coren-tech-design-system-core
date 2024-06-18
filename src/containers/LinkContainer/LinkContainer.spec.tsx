import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { LinkContainer } from './LinkContainer';

describe('<LinkContainer />', () => {
  it('should render the component', () => {
    render(<LinkContainer />);

    expect(false).toBeTruthy();
  });
});
