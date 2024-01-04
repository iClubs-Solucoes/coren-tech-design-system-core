import { ToastLocation, ToastTheme } from '../types';

export type ToastProps = {
  title: string;
  themes: ToastTheme;
  location?: ToastLocation;
  closingTime?: number;
  description?: string;
};

export type ToastStyleProps = {
  show?: boolean;
  themes?: ToastTheme;
};

export type ToastListStyleProps = {
  location?: ToastLocation;
};
