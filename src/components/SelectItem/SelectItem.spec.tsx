import { fireEvent, render, screen } from '@testing-library/react';
import { SuspectIcon } from 'common/assets/icons';
import { createTestWithWrapper } from 'common/tests';
import { CoreProvider } from 'contexts';
import { vi, describe, expect, it } from 'vitest';

import { SelectItem } from './SelectItem';

const itemsMock = ['Item 1', 'Item 2', 'Item 3'];
const handleChange = vi.fn();

describe('<SelectItem />', () => {
  it('should render the component', () => {
    render(createTestWithWrapper(<SelectItem value="Test" />, CoreProvider));

    expect(screen.getByText(/Test/i)).toBeTruthy();
  });

  it('should select item', () => {
    render(
      createTestWithWrapper(
        <SelectItem
          icon={<SuspectIcon />}
          value="Test"
          items={itemsMock}
          onChange={handleChange}
        />,
        CoreProvider,
      ),
    );

    fireEvent.click(screen.getByText(/Test/i));
    fireEvent.click(screen.getByText('Item 2'));

    expect(screen.getByText(/Test/i)).toBeTruthy();
    expect(handleChange).toBeCalledWith('Item 2');
  });

  it('should select item have only placeholder', () => {
    render(
      createTestWithWrapper(<SelectItem placeholder="Test" />, CoreProvider),
    );

    expect(screen.getByText(/Test/i)).toBeTruthy();
  });
});
