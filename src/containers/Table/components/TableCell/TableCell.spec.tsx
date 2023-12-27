import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { TableCell } from './TableCell';

describe('<TableBody />', () => {
  it('should render component', () => {
    render(<TableCell>Cell Renderizado</TableCell>);
    expect(screen.getByText('Cell Renderizado')).toBeTruthy();
  });
});
