import { fireEvent, render, screen } from '@testing-library/react';
import { SuspectIcon } from 'common/assets/icons';
import { createTestWithWrapper } from 'common/tests';
import { CoreProvider } from 'contexts';
import { vi, describe, expect, it } from 'vitest';

import { SelectItems } from './SelectItems';

const itemsMock = ['Item 1', 'Item 2', 'Item 3'];
const handleChange = vi.fn();

describe('<SelectItems />', () => {
  it('should render the component', () => {
    render(
      createTestWithWrapper(<SelectItems value={['Test']} />, CoreProvider),
    );

    expect(screen.getByText(/Test/i)).toBeTruthy();
  });

  it('should select item', () => {
    render(
      createTestWithWrapper(
        <SelectItems
          icon={<SuspectIcon />}
          placeholder="Test"
          items={itemsMock}
          onChange={handleChange}
        />,
        CoreProvider,
      ),
    );

    fireEvent.click(screen.getByText(/Test/i));
    fireEvent.click(screen.getByText('Item 2'));

    expect(handleChange).toBeCalledWith(['Item 2']);
  });

  it('should select item with checked', () => {
    render(
      createTestWithWrapper(
        <SelectItems
          icon={<SuspectIcon />}
          value={['Item 2']}
          placeholder="Test"
          items={itemsMock}
          onChange={handleChange}
        />,
        CoreProvider,
      ),
    );

    fireEvent.click(screen.getByText(/Item 2/i));
    fireEvent.click(screen.getAllByText('Item 2')[1]);

    expect(handleChange).toBeCalledWith(['Item 1']);
  });
});
