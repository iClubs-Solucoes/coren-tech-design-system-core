import { useEffect, useState } from 'react';

import { SuccessufulIcon, ErrorIcon } from 'common/assets/icons';

import { useToast } from '../useToast';
import * as S from './styles';
import { ToastProps } from './types';

export function Toast({
  title,
  id,
  description,
  themes,
  closingTime = 6000,
  onClose,
}: ToastProps) {
  const [show, setShow] = useState(true);
  const [animation, setAnimation] = useState(true);
  const { removeToast } = useToast();

  useEffect(() => {
    const interval = setInterval(() => {
      setShow(false);
      removeToast(id);
      onClose?.();
    }, closingTime);

    return () => clearInterval(interval);
  }, [id, removeToast, onClose]);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimation(false);
    }, closingTime - 800);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {show && (
        <S.Container key={id} show={animation}>
          <S.Wrapper themes={themes}>
            <S.Icon themes={themes}>
              {themes === 'success' && <SuccessufulIcon />}
              {themes === 'error' && <ErrorIcon />}
            </S.Icon>
            <S.Content>
              <S.Title>{title}</S.Title>
              {description && <S.Body>{description}</S.Body>}
            </S.Content>
          </S.Wrapper>
        </S.Container>
      )}
    </>
  );
}
