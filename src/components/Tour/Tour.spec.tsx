import { fireEvent, render, screen } from '@testing-library/react';
import { ScrollProvider } from 'hooks';
import { describe, expect, it, vi } from 'vitest';

import { Tour } from './Tour';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Wrapper = ({ children, ...props }: any) => (
  <ScrollProvider>
    <Tour {...props}>{children}</Tour>
  </ScrollProvider>
);

describe('<ContainerTour />', () => {
  it('should render the component', () => {
    render(
      <Wrapper>
        <div>test</div>
      </Wrapper>,
    );

    expect(screen.getByText(/Test/i)).toBeTruthy();
  });

  describe('Focus Tour', () => {
    const handleOk = vi.fn();

    it('should show message tour', () => {
      render(
        <Wrapper focus title="title test" description="description">
          <div>element</div>
        </Wrapper>,
      );

      expect(screen.getAllByText(/element/i).length === 2).toBeTruthy();
      expect(screen.getByText(/title test/i)).toBeTruthy();
      expect(screen.getByText(/description/i)).toBeTruthy();
    });

    it('should show message tour and click ok', () => {
      render(
        <Wrapper
          focus
          title="title test"
          description="description"
          onOk={handleOk}
        >
          <div>element</div>
        </Wrapper>,
      );

      expect(screen.getAllByText(/element/i).length === 2).toBeTruthy();
      expect(screen.getByText(/title test/i)).toBeTruthy();
      expect(screen.getByText(/description/i)).toBeTruthy();
      fireEvent.click(screen.getByText('Entendi'));

      expect(handleOk).toBeCalled();
    });

    it('should implement blur in component with idFilter', () => {
      const { rerender } = render(
        <>
          <div>123</div>
          <div id="filter-blur" data-testid="filter-blur">
            <Wrapper
              focus
              idFilter="filter-blur"
              title="title test"
              description="description"
              onOk={handleOk}
            >
              <div>element</div>
            </Wrapper>
          </div>
          <div>123</div>
        </>,
      );

      expect(screen.getByTestId('filter-blur').style.filter).toBe('blur(4px)');

      rerender(
        <>
          <div>123</div>
          <div id="filter-blur" data-testid="filter-blur">
            <Wrapper
              idFilter="filter-blur"
              title="title test"
              description="description"
              onOk={handleOk}
            >
              <div>element</div>
            </Wrapper>
          </div>
          <div>123</div>
        </>,
      );

      expect(screen.getByTestId('filter-blur').style.filter).not.toBe(
        'blur(4px)',
      );
    });

    it('should not implement blur in component with idFilter wrong', () => {
      render(
        <>
          <div>123</div>
          <div id="filter-not-same-in-idFilter" data-testid="filter-blur">
            <Wrapper
              focus
              idFilter="filter-blur"
              title="title test"
              description="description"
              onOk={handleOk}
            >
              <div>element</div>
            </Wrapper>
          </div>
          <div>123</div>
        </>,
      );

      expect(screen.getByTestId('filter-blur').style.filter).not.toBe(
        'blur(4px)',
      );
    });
  });
});
