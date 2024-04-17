import { useRef, useState } from 'react';

import { act, fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { Input } from './Input';

function Wrapper() {
  const [value, setValue] = useState('');

  const handleInputChange = (newValue: string) => setValue(newValue);

  return (
    <Input
      id="input"
      placeholder="Test"
      value={value}
      onChange={handleInputChange}
    />
  );
}

function InputContainer() {
  const ref = useRef();

  return <Input inputRef={ref} />;
}

describe('<Input />', () => {
  const handleKeyEnter = vi.fn();
  const handleKeyDown = vi.fn();
  const handleChange = vi.fn();

  it('should render the component', () => {
    render(<Input value="Test" />);

    expect(screen.getByDisplayValue(/Test/i)).toBeTruthy();
  });

  it('should call function enter key down', () => {
    render(<Input value="Test" onKeyEnter={handleKeyEnter} />);

    fireEvent.keyDown(screen.getByDisplayValue(/Test/i), {
      key: 'Enter',
    });

    expect(screen.getByDisplayValue(/Test/i)).toBeTruthy();
    expect(handleKeyEnter).toBeCalled();
  });

  it("should call function 'd' key down", () => {
    render(
      <Input
        value="Test"
        onKeyEnter={handleKeyEnter}
        onKeyDown={handleKeyDown}
      />,
    );

    fireEvent.keyDown(screen.getByDisplayValue(/Test/i), {
      key: 'd',
    });

    expect(screen.getByDisplayValue(/Test/i)).toBeTruthy();
    expect(handleKeyDown).toBeCalled();
  });

  it('should make onchange with mask', () => {
    render(
      <Input
        placeholder="Test"
        mask={{ mask: '999' }}
        onChange={handleChange}
      />,
    );

    act(() => {
      fireEvent.change(screen.getByPlaceholderText('Test'), {
        target: {
          value: '123',
        },
      });
    });

    expect(handleChange).toBeCalled();
  });

  it('should be able to type in the input ', () => {
    render(<Wrapper />);

    const input = screen.getByPlaceholderText('Test');

    const valueToEnter = 'ABC';

    act(() =>
      fireEvent.change(input, {
        target: {
          value: valueToEnter,
        },
      }),
    );

    const inputFilled = screen.getByDisplayValue(new RegExp(valueToEnter, 'i'));

    expect(inputFilled).toBeTruthy();

    act(() =>
      fireEvent.change(input, {
        target: {
          value: '',
        },
      }),
    );

    expect(input).toBeTruthy();
  });

  it('should set a reference if inputRef is passed ', () => {
    render(<InputContainer />);
  });
});
