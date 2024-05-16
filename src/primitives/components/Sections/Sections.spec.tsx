import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Sections } from './Sections';

describe('<Sections />', () => {
  it('should render the component', () => {
    render(<Sections />);

    expect(false).toBeTruthy();
  });
});
