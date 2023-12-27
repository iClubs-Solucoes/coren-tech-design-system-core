import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { TableHeaderRow } from './TableHeaderRow';

describe('<TableHeaderRow />', () => {
  it('should render component', () => {
    render(<TableHeaderRow>Header Renderizado</TableHeaderRow>);
    expect(screen.getByText('Header Renderizado')).toBeTruthy();
  });
});
