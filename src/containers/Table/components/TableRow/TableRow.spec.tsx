import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { TableRow } from './TableRow';

describe('<TableRow />', () => {
  const handleClick = vi.fn();

  it('should render component', () => {
    render(<TableRow>Row Renderizado</TableRow>);
    expect(screen.getByText('Row Renderizado')).toBeTruthy();
  });

  it('should click in row', () => {
    render(<TableRow onClick={handleClick}>Row Renderizado</TableRow>);
    fireEvent.click(screen.getByText('Row Renderizado'));
    expect(handleClick).toBeCalled();
  });

  it('should forward className to the DOM element', () => {
    const children = 'abc';

    render(<TableRow className="123">{children}</TableRow>);

    const tableRow = screen.getByText(new RegExp(children, 'i'));

    expect(tableRow.className).includes('123');
  });
});
