import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Search } from './Search';

describe('<Search />', () => {
  it('should render the component', () => {
    render(<Search />);

    expect(false).toBeTruthy();
  });
});
