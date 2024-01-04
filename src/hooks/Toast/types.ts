import { ReactNode } from 'react';

export type ToastTheme = 'success' | 'error';

export type ToastLocation = 'top' | 'bottom';

export type ToastProviderProps = {
  children: ReactNode;
};

export type IToastContext = {
  toast: ToastFunction;
};

export type ToastMessage = {
  title: string;
  description?: string;
  show?: boolean;
  location?: ToastLocation;
  themes: ToastTheme;
  closingTime?: number;
  onClose?: () => void;
};

export type ToastFunction = (message: ToastMessage) => void;
