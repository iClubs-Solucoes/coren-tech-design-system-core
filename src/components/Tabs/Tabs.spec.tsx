import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { Tabs } from './Tabs';

const handleChange = vi.fn();

describe('<Tabs />', () => {
  const defaultProps = {
    filter: 'Todos',
    iconFilter: 'Todos',
    filters: ['Todos', 'Pendente', 'Em análise', 'Analisado'],
    onChange: handleChange,
  };

  it('should render the component', () => {
    const { container } = render(<Tabs />);

    expect(container).toBeTruthy();
  });

  it('should render the component', () => {
    render(<Tabs {...defaultProps} />);

    fireEvent.click(screen.getByText('Em análise'));

    expect(handleChange).toBeCalledWith('Em análise');
  });

  it('should forward className to the DOM element', () => {
    render(<Tabs className="123" {...defaultProps} />);

    const tabs = screen.getByTestId('tabs');

    expect(tabs.className).includes('123');
  });
});
