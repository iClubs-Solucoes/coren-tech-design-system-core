import { useCallback, useState } from 'react';

import * as S from './styles';
import { HideProps } from './types';

export function Hide({ passwordInput, onClick }: HideProps) {
  const [hidden, setHidden] = useState(true);

  const handleHideClick = useCallback(() => {
    onClick?.();

    setHidden(hidden => !hidden);

    const input = passwordInput?.current;
    const typeIsPassword = input?.type === 'password';

    if (input && typeIsPassword) input.type = 'text';
    if (input && !typeIsPassword) input.type = 'password';
  }, []);

  return (
    <>
      {hidden && <S.HiddenIcon onClick={handleHideClick} />}
      {!hidden && <S.UnhiddenIcon onClick={handleHideClick} />}
    </>
  );
}
