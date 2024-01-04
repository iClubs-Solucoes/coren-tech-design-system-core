import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';
import { createPortal } from 'react-dom';

import { Toast } from './components';
import * as S from './components/styles';
import { IToastContext, ToastMessage, ToastProviderProps } from './types';

const ToastContext = createContext<IToastContext>({} as IToastContext);

function ToastProvider({ children }: ToastProviderProps) {
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const handleAddToast = useCallback(
    (message: ToastMessage) => {
      if (toasts.length >= 1) return;
      setToasts([...toasts, message]);
    },
    [toasts],
  );

  const handleShowToast = useCallback(
    (message: ToastMessage, index: number) => {
      const { closingTime, location = 'top' } = message;

      setTimeout(() => {
        setToasts([...toasts.filter((_t, toastIndex) => toastIndex !== index)]);
      }, closingTime || 2000);

      return createPortal(
        <Toast key={index} {...message} />,
        document.getElementById(`${location}-list-toasts`)!,
      );
    },
    [toasts],
  );

  console.log(toasts);

  const ToastContextValue = useMemo(
    () => ({
      toast: handleAddToast,
    }),
    [toasts],
  );

  return (
    <ToastContext.Provider value={ToastContextValue}>
      {children}
      <S.ListToasts id="top-list-toasts" location="top">
        {toasts[0] && handleShowToast(toasts[0], 0)}
      </S.ListToasts>
      <S.ListToasts id="bottom-list-toasts" location="bottom"></S.ListToasts>
    </ToastContext.Provider>
  );
}

function useToast(): IToastContext {
  const context = useContext(ToastContext);

  return context;
}

export { ToastProvider, useToast };
