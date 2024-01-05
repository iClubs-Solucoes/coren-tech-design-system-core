import { ToastLocation, ToastMessage, ToastTheme } from '../types';

export type ToastProps = {
  title: string;
  id?: number;
  themes: ToastTheme;
  location?: ToastLocation;
  closingTime?: number;
  description?: string;
  onClose?: () => void;
};

export type ToastStyleProps = {
  show?: boolean;
  themes?: ToastTheme;
};

export type ToastListStyleProps = {
  location?: ToastLocation;
};

export type ToastContainerProps = {
  toasts: ToastMessage[];
};
