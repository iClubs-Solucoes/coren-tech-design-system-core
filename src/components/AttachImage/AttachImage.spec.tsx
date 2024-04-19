import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { AttachImage } from './AttachImage';

describe('<AttachImage />', () => {
  it('should render the component', () => {
    render(<AttachImage />);

    expect(false).toBeTruthy();
  });
});
