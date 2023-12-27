import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { TableBody } from './TableBody';

describe('<TableBody />', () => {
  it('should render component', () => {
    render(<TableBody>Body Renderizado</TableBody>);
    expect(screen.getByText('Body Renderizado')).toBeTruthy();
  });
});
