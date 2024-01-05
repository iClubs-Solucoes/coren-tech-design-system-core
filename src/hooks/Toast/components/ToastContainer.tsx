import * as S from './styles';
import { Toast } from './Toast';
import { ToastContainerProps } from './types';

export function ToastContainer({ toasts }: ToastContainerProps) {
  return (
    <>
      <S.ListToasts>
        {toasts
          .filter(t => !t.location || t.location === 'top')
          .map(item => (
            <Toast key={item.id} id={item?.id} {...item} />
          ))}
      </S.ListToasts>
      <S.ListToasts location="bottom">
        {toasts
          .filter(t => t.location === 'bottom')
          .map(item => (
            <Toast key={item.id} id={item?.id} {...item} />
          ))}
      </S.ListToasts>
    </>
  );
}
