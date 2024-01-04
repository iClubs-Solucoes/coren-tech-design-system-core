import { renderHook, screen, waitFor } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { IToastContext } from './types';
import { ToastProvider, useToast } from './useToast';

let hook = {} as IToastContext;

describe('Hook useToast', () => {
  const handleOnClose = vi.fn();

  beforeEach(() => {
    const { result } = renderHook(() => useToast(), {
      wrapper: ToastProvider,
    });
    hook = result.current as IToastContext;
  });

  it('Show success toast at top', async () => {
    await waitFor(() =>
      hook.toast({
        title: 'Success Title',
        themes: 'success',
        location: 'top',
      }),
    );
    expect(screen.getByText(/Success Title/i));
  });

  it('Show success toast for 1 sec', async () => {
    hook.toast({
      title: 'Success Title',
      themes: 'success',
      location: 'top',
      closingTime: 1,
    });
    await waitFor(
      () => expect(screen.queryByText(/Success Title/i)).toBeTruthy(),
      { timeout: 10000 },
    );
  });

  it('Show error toast at bottom', async () => {
    await waitFor(() =>
      hook.toast({
        title: 'Error Title',
        description: 'Tiny error',
        location: 'bottom',
        themes: 'error',
        closingTime: 1000,
      }),
    );
    expect(screen.getByText(/Error Title/i));
  });

  it('should call the onClose function if it exists', async () => {
    hook.toast({
      title: 'The function must be called',
      themes: 'success',
      closingTime: 100,
      onClose: handleOnClose,
    });

    await waitFor(() => expect(handleOnClose).toBeCalled());
  });
});
