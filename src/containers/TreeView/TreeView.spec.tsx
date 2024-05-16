import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { TreeView } from './TreeView';

describe('<TreeView />', () => {
  it('should render the component', () => {
    render(<TreeView />);

    expect(false).toBeTruthy();
  });
});
