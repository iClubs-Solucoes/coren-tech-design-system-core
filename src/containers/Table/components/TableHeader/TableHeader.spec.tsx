import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { TableHeader } from './TableHeader';

describe('<TableHeader />', () => {
  it('should render component', () => {
    render(<TableHeader>Header Renderizado</TableHeader>);
    expect(screen.getByText('Header Renderizado')).toBeTruthy();
  });
});
