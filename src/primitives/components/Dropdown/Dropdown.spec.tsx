import { act, fireEvent, render, screen } from '@testing-library/react';
import { ScrollProvider } from 'hooks';
import { describe, expect, it, vi } from 'vitest';

import { Arrow } from './Arrow';
import { Dropdown } from './Dropdown';
import { Field } from './Field';
import { Item } from './Item';
import { Menu } from './Menu';
import { Trigger } from './Trigger';
import { DropdownMenuProps } from './types';

function Wrapper({ ...dropdownMenuProps }: DropdownMenuProps) {
  return (
    <ScrollProvider>
      <Dropdown {...dropdownMenuProps} />
    </ScrollProvider>
  );
}

const handleChange = vi.fn();

describe('<Dropdown />', () => {
  it('should render the component', () => {
    render(
      <Wrapper>
        <div>trigger</div>
        <div>menu</div>
      </Wrapper>,
    );

    expect(screen.getByText(/trigger/i)).toBeTruthy();
    expect(screen.queryByText(/menu/i)).not.toBeTruthy();
  });

  it('should open dropdown', () => {
    render(
      <Wrapper>
        <Trigger>
          <Field>
            <p>Open here</p>
            <Arrow />
          </Field>
        </Trigger>
        <Menu>
          <Item>Item 1</Item>
          <Item>Item 2</Item>
        </Menu>
      </Wrapper>,
    );

    const fieldWithTrigger = screen.getByText(/Open here/i);

    expect(fieldWithTrigger).toBeTruthy();

    fireEvent.click(fieldWithTrigger);

    expect(screen.getByText('Item 1')).toBeTruthy();
  });

  it('should open dropdown with onChange', () => {
    render(
      <Wrapper onChange={handleChange}>
        <Trigger>
          <Field>
            <p>Open here</p>
            <Arrow />
          </Field>
        </Trigger>
        <Menu>
          <Item>Item 1</Item>
          <Item>Item 2</Item>
        </Menu>
      </Wrapper>,
    );

    const fieldWithTrigger = screen.getByText(/Open here/i);

    expect(fieldWithTrigger).toBeTruthy();

    fireEvent.click(fieldWithTrigger);

    expect(screen.getByText('Item 1')).toBeTruthy();
    expect(handleChange).toBeCalled();
  });

  it('should hover work with trigger', () => {
    render(
      <Wrapper onChange={handleChange}>
        <Trigger hover>
          <Field>
            <p>Open here</p>
            <Arrow />
          </Field>
        </Trigger>
        <Menu>
          <Item>Item 1</Item>
          <Item>Item 2</Item>
        </Menu>
      </Wrapper>,
    );

    const fieldWithTrigger = screen.getByText(/Open here/i);

    expect(fieldWithTrigger).toBeTruthy();
    fireEvent.mouseEnter(fieldWithTrigger);
  });

  describe('Hover', () => {
    it('should hover work with trigger', () => {
      render(
        <Wrapper onChange={handleChange}>
          <Trigger hover>
            <Field>
              <p>Open here</p>
              <Arrow />
            </Field>
          </Trigger>
          <Menu>
            <Item>Item 1</Item>
            <Item>Item 2</Item>
          </Menu>
        </Wrapper>,
      );

      const fieldWithTrigger = screen.getByText(/Open here/i);

      expect(fieldWithTrigger).toBeTruthy();
      fireEvent.mouseEnter(fieldWithTrigger);
      expect(screen.queryByText('Item 1')).toBeTruthy();
    });

    it("should hover don't work with trigger without prop", () => {
      render(
        <Wrapper onChange={handleChange}>
          <Trigger>
            <Field>
              <p>Open here</p>
              <Arrow />
            </Field>
          </Trigger>
          <Menu>
            <Item>Item 1</Item>
            <Item>Item 2</Item>
          </Menu>
        </Wrapper>,
      );

      const fieldWithTrigger = screen.getByText(/Open here/i);

      expect(fieldWithTrigger).toBeTruthy();

      act(() => {
        fireEvent.mouseEnter(fieldWithTrigger);
      });

      expect(screen.queryByText('Item 1')).not.toBeTruthy();
    });
  });

  it('should click outside and close menu', () => {
    render(
      <Wrapper>
        <Trigger>
          <Field>
            <p>Open here</p>
            <Arrow />
          </Field>
        </Trigger>
        <Menu>
          <Item>Item 1</Item>
          <Item>Item 2</Item>
        </Menu>
      </Wrapper>,
    );

    const fieldWithTrigger = screen.getByText(/Open here/i);

    expect(fieldWithTrigger).toBeTruthy();

    fireEvent.click(fieldWithTrigger);

    expect(screen.getByText('Item 1')).toBeTruthy();

    act(() => {
      fireEvent.click(document.body);
    });

    expect(screen.queryByText('Item 1')).not.toBeTruthy();
  });
});
