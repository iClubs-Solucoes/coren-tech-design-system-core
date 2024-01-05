import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';

import { ToastContainer } from './components/ToastContainer';
import { IToastContext, ToastMessage, ToastProviderProps } from './types';

let id = 1;

const ToastContext = createContext<IToastContext>({} as IToastContext);

function ToastProvider({ children }: ToastProviderProps) {
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const handleAddToast = useCallback(
    (message: ToastMessage) => {
      const messageChange = message;

      id++;
      messageChange.id = id;
      setToasts(toasts => [...toasts, messageChange]);
    },
    [id, setToasts],
  );

  const handleRemoveToast = useCallback(
    (idRemove?: number) => {
      if (idRemove === undefined) return;
      setToasts(toasts => [...toasts.filter(t => t.id !== idRemove)]);
    },
    [setToasts],
  );

  const ToastContextValue = useMemo(
    () => ({
      toast: handleAddToast,
      removeToast: handleRemoveToast,
    }),
    [toasts],
  );

  return (
    <ToastContext.Provider value={ToastContextValue}>
      {children}
      <ToastContainer toasts={toasts} />
    </ToastContext.Provider>
  );
}

function useToast(): IToastContext {
  const context = useContext(ToastContext);

  return context;
}

export { ToastProvider, useToast };
