import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Toast } from './Toast';

describe('<Toast />', () => {
  it('should render the success component', () => {
    const { container, getByText } = render(
      <Toast title="Titulo" description="subtitle" themes="success" />,
    );

    expect(container).toBeTruthy();
    expect(getByText('subtitle')).toBeTruthy();
  });
  it('should render the error component', () => {
    const { container } = render(<Toast themes="error" title="Titulo" />);

    expect(container).toBeTruthy();
  });
});
