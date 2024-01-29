import { useRef } from 'react';

import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { Hide } from './Hide';

type PasswordFieldProps = { inputType: 'text' | 'password' };

function PasswordField({ inputType }: PasswordFieldProps) {
  const ref = useRef<HTMLInputElement>();

  return (
    <div>
      <input
        ref={element => {
          if (element) ref.current = element;
        }}
        type={inputType}
        placeholder="Type your password"
      />
      <Hide passwordInput={ref} />
    </div>
  );
}

describe('<Hide />', () => {
  const handleHideClick = vi.fn();

  it('should render the component', () => {
    render(<Hide />);

    const hiddenIcon = screen.getByTestId('hidden-icon');
    expect(hiddenIcon).toBeTruthy();
  });

  it('should call onClick when hide is clicked', () => {
    render(<Hide onClick={handleHideClick} />);

    const hiddenIcon = screen.getByTestId('hidden-icon');
    fireEvent.click(hiddenIcon);

    expect(handleHideClick).toBeCalledTimes(1);
  });

  it('should unhide', () => {
    render(<Hide onClick={handleHideClick} />);

    let hiddenIcon: HTMLElement | null = screen.getByTestId('hidden-icon');
    fireEvent.click(hiddenIcon);

    const unhiddenIcon = screen.getByTestId('unhidden-icon');
    hiddenIcon = screen.queryByTestId('hidden-icon');

    expect(unhiddenIcon).toBeTruthy();
    expect(hiddenIcon).not.toBeTruthy();
  });

  it('should hide', () => {
    render(<Hide onClick={handleHideClick} />);

    let hiddenIcon: HTMLElement | null = screen.getByTestId('hidden-icon');
    fireEvent.click(hiddenIcon);

    let unhiddenIcon: HTMLElement | null = screen.getByTestId('unhidden-icon');
    fireEvent.click(unhiddenIcon);

    hiddenIcon = screen.queryByTestId('hidden-icon');
    unhiddenIcon = screen.queryByTestId('unhidden-icon');

    expect(hiddenIcon).toBeTruthy();
    expect(unhiddenIcon).not.toBeTruthy();
  });

  it("should change type to text if input's type is password", () => {
    render(<PasswordField inputType="password" />);

    const input = screen.getByPlaceholderText(/Type your password/i);

    expect(input).toHaveProperty('type', 'password');

    const hiddenIcon = screen.getByTestId('hidden-icon');
    fireEvent.click(hiddenIcon);

    expect(input).toHaveProperty('type', 'text');
  });

  it("should change type to password if input's type is not password", () => {
    render(<PasswordField inputType="text" />);

    const input = screen.getByPlaceholderText(/Type your password/i);

    expect(input).toHaveProperty('type', 'text');

    const hiddenIcon = screen.getByTestId('hidden-icon');
    fireEvent.click(hiddenIcon);

    expect(input).toHaveProperty('type', 'password');
  });
});
