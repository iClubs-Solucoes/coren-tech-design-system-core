import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { Tabs } from './Tabs';

const handleChange = vi.fn();

describe('<Tabs />', () => {
  it('should render the component', () => {
    const { container } = render(<Tabs />);

    expect(container).toBeTruthy();
  });

  it('should render the component', () => {
    render(
      <Tabs
        filter="Todos"
        iconFilter={'Todos'}
        filters={['Todos', 'Pendente', 'Em análise', 'Analisado']}
        onChange={handleChange}
      />,
    );

    fireEvent.click(screen.getByText('Em análise'));

    expect(handleChange).toBeCalledWith('Em análise');
  });
});
