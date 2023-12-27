import { act, fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { Search } from './Search';

const handleChange = vi.fn();

describe('<Search />', () => {
  it('should render the component', () => {
    render(<Search contracted placeholder="Test" />);

    expect(screen.getByPlaceholderText(/Test/i)).toBeTruthy();
  });

  it('should click Search and expand search', () => {
    render(<Search placeholder="Test" />);

    fireEvent.click(screen.getByTestId('search-test'));

    expect(screen.getByPlaceholderText(/Test/i)).toBeTruthy();
  });

  it('should click Search and expand search and after click outside and close', () => {
    render(<Search placeholder="Test" />);

    fireEvent.click(screen.getByTestId('search-test'));

    expect(screen.getByPlaceholderText(/Test/i)).toBeTruthy();

    act(() => {
      fireEvent.click(document.body);
    });

    expect(screen.queryByPlaceholderText(/Test/i)).not.toBeTruthy();
  });

  it("should not can't expand if contracted define ", () => {
    render(<Search contracted={false} placeholder="Test" />);

    fireEvent.click(screen.getByTestId('search-test'));

    expect(screen.queryByPlaceholderText(/Test/i)).not.toBeTruthy();
  });

  it("should not can't expand false if have value ", () => {
    render(<Search value="abc" placeholder="Test" />);

    fireEvent.click(screen.getByTestId('search-test'));
    expect(screen.getByDisplayValue(/abc/i)).toBeTruthy();

    act(() => {
      fireEvent.click(document.body);
    });

    expect(screen.getByDisplayValue(/abc/i)).toBeTruthy();
  });

  it('should remove value if have clear-search', () => {
    render(<Search value="abc" placeholder="Test" onChange={handleChange} />);

    act(() => {
      fireEvent.click(screen.getByTestId('clear-search'));
      expect(screen.queryByDisplayValue(/abc/i)).toBeFalsy();
      expect(handleChange).toBeCalledWith('');
    });
  });
});
