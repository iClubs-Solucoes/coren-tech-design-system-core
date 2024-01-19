import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { SkeletonLoading } from './SkeletonLoading';

describe('<SkeletonLoading />', () => {
  it('should render the component', () => {
    render(<SkeletonLoading>Test</SkeletonLoading>);

    expect(screen.getByText(/Test/i)).toBeTruthy();
  });

  it('should render the component with loading', () => {
    render(<SkeletonLoading loading>Test</SkeletonLoading>);

    expect(screen.queryByText(/Test/i)).not.toBeTruthy();
  });
});
