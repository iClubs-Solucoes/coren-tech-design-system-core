import { fireEvent, render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { Pagination } from './Pagination';

const handleChange = vi.fn();

describe('<Pagination />', () => {
  it('should render the component', () => {
    render(<Pagination max={60} byPage={6} />);

    expect(screen.getByText(/1/i)).toBeTruthy();
  });

  describe('Changes', () => {
    it('should click right in component', () => {
      render(<Pagination onChange={handleChange} max={60} byPage={6} />);

      const arrowRight = screen.getByTestId('arrow-right-pagination-test');

      fireEvent.click(arrowRight);
      expect(handleChange).toBeCalledWith(1);
      expect(screen.getByText(/2/i)).toBeTruthy();
    });

    it('should click left in the component in page 1', () => {
      render(
        <Pagination
          pageSelect={2}
          onChange={handleChange}
          max={60}
          byPage={6}
        />,
      );
      const arrowLeft = screen.getByTestId('arrow-left-pagination-test');

      fireEvent.click(arrowLeft);
      expect(handleChange).toBeCalledWith(1);
      expect(screen.getByText(/2/i)).toBeTruthy();
    });

    it('should click right in the component in page 10', () => {
      render(
        <Pagination
          pageSelect={10}
          onChange={handleChange}
          max={60}
          byPage={6}
        />,
      );
      const arrowRight = screen.getByTestId('arrow-right-pagination-test');

      fireEvent.click(arrowRight);

      expect(handleChange).toBeCalledWith(1);
      expect(screen.getByText(/1/i)).toBeTruthy();
    });

    it('should click left in the component in page 1', () => {
      render(<Pagination onChange={handleChange} max={60} byPage={6} />);

      const arrowLeft = screen.getByTestId('arrow-left-pagination-test');

      fireEvent.click(arrowLeft);
      expect(handleChange).toBeCalledWith(10);
      expect(screen.getByText(/11/i)).toBeTruthy();
    });

    it('should click and nothing does because byPage is zero', () => {
      render(<Pagination onChange={handleChange} max={60} byPage={0} />);

      const arrowLeft = screen.getByTestId('arrow-left-pagination-test');

      fireEvent.click(arrowLeft);
      expect(handleChange).toBeCalledWith(0);
      expect(screen.getByText(/1/i)).toBeTruthy();
    });

    describe('Disabled', () => {
      beforeEach(() => {
        handleChange.mockClear();
      });

      it('should click right in component', () => {
        render(
          <Pagination disabled onChange={handleChange} max={60} byPage={6} />,
        );
        const arrowRight = screen.getByTestId('arrow-right-pagination-test');

        fireEvent.click(arrowRight);
        expect(handleChange).not.toBeCalled();
        expect(screen.getByText(/1/i)).toBeTruthy();
      });
      it('should click left in the component in page 1', () => {
        render(
          <Pagination
            disabled
            pageSelect={2}
            onChange={handleChange}
            max={60}
            byPage={6}
          />,
        );
        const arrowLeft = screen.getByTestId('arrow-left-pagination-test');

        fireEvent.click(arrowLeft);
        expect(handleChange).not.toBeCalled();
        expect(screen.getByText(/3/i)).toBeTruthy();
      });
    });
  });
});
