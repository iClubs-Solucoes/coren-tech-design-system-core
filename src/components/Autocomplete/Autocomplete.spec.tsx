import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Autocomplete } from './Autocomplete';

describe('<Autocomplete />', () => {
  it('should render the component', () => {
    render(<Autocomplete />);

    expect(false).toBeTruthy();
  });
});
