import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Container } from './Container';

describe('<Container />', () => {
  it('should render the component', () => {
    render(<Container />);

    expect(false).toBeTruthy();
  });
});
