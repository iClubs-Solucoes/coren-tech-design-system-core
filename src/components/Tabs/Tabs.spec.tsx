import { fireEvent, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';

import { Tabs } from './Tabs';

const handleChange = vi.fn();

describe('<Tabs />', () => {
  const defaultProps = {
    filter: 'Todos',
    iconFilter: 'Todos',
    filters: ['Todos', 'Pendente', 'Em análise', 'Analisado'],
    onChange: handleChange,
  };

  const { filters, onChange } = defaultProps;

  afterEach(() => {
    handleChange.mockClear();
  });

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

  it('should call onChange when the tab is clicked', () => {
    render(<Tabs {...defaultProps} />);

    const tabName = filters[1];

    const tab = screen.getByText(new RegExp(tabName, 'i'));
    fireEvent.click(tab);

    expect(onChange).toBeCalledTimes(1);
  });

  it('should not call onChange if the tab is disabled', async () => {
    const disabledFilter = filters[1];

    const disabledFilters = [disabledFilter];

    render(<Tabs {...defaultProps} disabledFilters={disabledFilters} />);

    const tab = await screen.findByText(new RegExp(disabledFilter, 'i'));
    fireEvent.click(tab);

    expect(onChange).not.toBeCalled();
  });
});
