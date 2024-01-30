import { fireEvent, render, screen } from '@testing-library/react';
import { SearchIcon } from 'common/assets/icons';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { Button } from './Button';

const handleClick = vi.fn();

describe('<Button />', () => {
  beforeEach(() => {
    handleClick.mockClear();
  });

  it('should render default', () => {
    render(<Button onClick={handleClick}>Button Test</Button>);
    expect(screen.getByText('Button Test')).toBeTruthy();
  });

  it('should click in button', () => {
    render(<Button onClick={handleClick}>Button Test</Button>);

    fireEvent.click(screen.getByText('Button Test'));

    expect(handleClick).toBeCalled();
  });

  it('should exist icon in button', () => {
    render(
      <Button
        onClick={handleClick}
        icon={<SearchIcon data-testid="icon-button" />}
      >
        Button Test
      </Button>,
    );

    expect(screen.getByTestId('icon-button')).toBeTruthy();
  });

  it("should can't click if disabled ", () => {
    render(
      <Button disabledBtn onClick={handleClick}>
        Button Test
      </Button>,
    );

    fireEvent.click(screen.getByText('Button Test'));

    expect(handleClick).not.toBeCalled();
  });

  it('should call onClick function', () => {
    render(<Button onClick={handleClick}>Button Test</Button>);

    const button = screen.getByText('Button Test');

    fireEvent.click(button);

    expect(handleClick).toBeCalled();
  });

  it('should render loading button', () => {
    render(<Button loading={true}></Button>);

    const loadingBullets = screen.getByTestId('button-loading-bullets');
    expect(loadingBullets).toBeTruthy();
  });
});
