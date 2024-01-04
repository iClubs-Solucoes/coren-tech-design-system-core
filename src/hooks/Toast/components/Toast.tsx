import { useEffect, useState } from 'react';

import { SuccessufulIcon, ErrorIcon } from 'common/assets/icons';

import * as S from './styles';
import { ToastProps } from './types';

export function Toast({
  title,
  description,
  themes,
  closingTime = 2000,
}: ToastProps) {
  const [show, setShow] = useState(true);
  const [animation, setAnimation] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShow(false);
    }, closingTime);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimation(false);
    }, closingTime - 800);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {show && (
        <S.Container show={animation}>
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
