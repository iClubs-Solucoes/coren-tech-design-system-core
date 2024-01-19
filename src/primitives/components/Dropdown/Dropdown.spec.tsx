import { act, fireEvent, render, screen } from '@testing-library/react';
import { ScrollProvider } from 'hooks';
import { describe, expect, it, vi } from 'vitest';

import { Dropdown } from './';
import { RootProps } from './types';

const { Root, Arrow, Trigger, Menu, List, Item, Field } = Dropdown;

function Wrapper({ ...RootProps }: RootProps) {
  return (
    <ScrollProvider>
      <Root {...RootProps} />
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
          <Field>Open here</Field>
        </Trigger>
        <Menu>
          <List>
            <Item noopClose>Item 1</Item>
            <Item>Item 2</Item>
          </List>
        </Menu>
      </Wrapper>,
    );

    const fieldWithTrigger = screen.getByText(/Open here/i);

    expect(fieldWithTrigger).toBeTruthy();

    fireEvent.click(fieldWithTrigger);

    expect(screen.getByText('Item 1')).toBeTruthy();
    fireEvent.click(screen.getByText('Item 1'));
    fireEvent.click(screen.getByText('Item 2'));

    expect(handleChange).toBeCalled();
  });

  it('should hover work with triggers', () => {
    const handleMouseEnter = vi.fn();
    const handleMouseLeave = vi.fn();

    render(
      <Wrapper onChange={handleChange}>
        <Trigger
          hover
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Field>
            <p>Open here</p>
          </Field>
        </Trigger>
        <Menu>
          <Item>Item 1</Item>
          <Item>Item 2</Item>
        </Menu>
      </Wrapper>,
    );

    const fieldWithTrigger = screen.getByTestId('trigger-dropdown');

    fireEvent.mouseEnter(fieldWithTrigger);
    fireEvent.mouseLeave(fieldWithTrigger);
  });

  it("should hover don't work with triggers", () => {
    render(
      <Trigger disabled>
        <Field>
          <p>Open here</p>
        </Field>
      </Trigger>,
    );

    fireEvent.click(screen.getByTestId('trigger-dropdown'));
    fireEvent.mouseLeave(screen.getByTestId('trigger-dropdown'));
  });

  describe('Hover', () => {
    it('should hover work with triggers', () => {
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

  describe('Render with strings', () => {
    it('should render Menu', () => {
      render(<Menu open>Menu</Menu>);

      expect(screen.getByText(/Menu/i)).toBeTruthy();
    });

    it('should render List', () => {
      render(<List open>List</List>);

      expect(screen.getByText(/List/i)).toBeTruthy();
    });

    it('should render List with one item', () => {
      render(
        <List open>
          <Item>Item 1</Item>
        </List>,
      );

      expect(screen.getByText(/Item 1/i)).toBeTruthy();
    });

    it('should render List without items to render', () => {
      render(
        <List open>
          {[].map((item: string) => (
            <Item key={item}>{item}</Item>
          ))}
        </List>,
      );

      expect(screen.queryByText(/Item 1/i)).not.toBeTruthy();
    });

    it('should render Trigger', () => {
      render(<Trigger open>Trigger</Trigger>);

      expect(screen.queryByText(/Trigger/i)).toBeTruthy();
    });
  });
});
