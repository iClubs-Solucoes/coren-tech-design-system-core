import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Table } from './Table';

describe('<Table />', () => {
  it('should render component', () => {
    render(<Table>Table Renderizado</Table>);
    expect(screen.getByText('Table Renderizado')).toBeTruthy();
  });
});
