import { renderHook } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';

import { IScrollContext } from './types';
import { ScrollProvider, useScroll } from './useScroll';

let hook = {} as IScrollContext;

describe('useScroll', () => {
  beforeEach(() => {
    const { result } = renderHook(() => useScroll(), {
      wrapper: ScrollProvider,
    });
    hook = result.current as IScrollContext;
  });

  it('should use hook', () => {
    expect(hook.blockedScroll).toBe(false);
  });
});
