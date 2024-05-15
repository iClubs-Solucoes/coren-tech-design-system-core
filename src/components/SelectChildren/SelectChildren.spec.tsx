import { fireEvent, render, screen } from '@testing-library/react';
import { EyeIcon } from 'common/assets/icons';
import { ScrollProvider } from 'hooks';
import { describe, expect, it, vi } from 'vitest';

import { SelectChildren } from './SelectChildren';
import { SelectChildrenProps } from './types';

function Wrapper({ ...SelectChildrenProps }: SelectChildrenProps) {
  return (
    <ScrollProvider>
      <SelectChildren {...SelectChildrenProps} />
    </ScrollProvider>
  );
}

describe('<SelectChildren />', () => {
  const handleChange = vi.fn();

  const itemsMock = [
    {
      value: 'Test 1',
      label: 'Test 1',
    },
    {
      value: 'Test 2',
      label: 'Teste 2',
    },
    {
      value: 'Test 3',
      label: '',
    },
  ];

  it('should render the component', () => {
    const { container } = render(<Wrapper />);

    expect(container).toBeTruthy();
  });

  it('should SelectChildren item', () => {
    const { rerender } = render(
      <Wrapper
        values={{ value: 'Test', label: '' }}
        onChange={handleChange}
        items={itemsMock}
      />,
    );

    fireEvent.click(screen.getByText('Test'));

    fireEvent.click(screen.getByText('Teste 2'));

    rerender(
      <Wrapper
        values={{ value: 'Test 2', label: 'Teste 2' }}
        onChange={handleChange}
        items={itemsMock}
      />,
    );

    expect(handleChange).toBeCalledWith({
      ...itemsMock[1],
    });

    expect(screen.getByText(/Teste 2/i)).toBeTruthy();
  });

  it('should render with a custom icon', () => {
    render(<Wrapper icon={<EyeIcon data-testid="eye-icon" />} />);

    const icon = screen.getByTestId(/eye-icon/i);

    expect(icon).toBeTruthy();
  });

  it('should forward className to the DOM element', () => {
    render(<Wrapper className="123" />);

    const SelectChildren = screen.getByTestId(/SelectChildren-container/i);

    expect(SelectChildren.className).includes('123');
  });
});
