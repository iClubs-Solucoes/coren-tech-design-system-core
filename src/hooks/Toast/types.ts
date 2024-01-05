import { ReactNode } from 'react';

export type ToastTheme = 'success' | 'error';

export type ToastLocation = 'top' | 'bottom';

export type ToastProviderProps = {
  children: ReactNode;
};

export type IToastContext = {
  toast: ToastFunction;
  removeToast: (index?: number) => void;
};

export type ToastMessage = {
  title: string;
  description?: string;
  id?: number;
  show?: boolean;
  location?: ToastLocation;
  themes: ToastTheme;
  closingTime?: number;
  onClose?: () => void;
};

export type ToastFunction = (message: ToastMessage) => void;
