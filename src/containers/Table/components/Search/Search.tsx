import { useCallback, useEffect, useState } from 'react';

import { CloseIcon, SearchIcon } from 'common/assets/icons';
import { useDetectClickOutside } from 'common/utils/useDetechClickoutside';

import * as S from './styles';
import { SearchProps } from './types';

export function Search({
  contracted,
  disabled,
  onClick,
  className,
  ...propsInput
}: SearchProps) {
  const [expand, setExpand] = useState(!contracted);

  const handleExpand = useCallback(() => {
    if (contracted !== undefined || disabled) return;
    setExpand(false);
  }, [contracted, expand, disabled]);

  const ref = useDetectClickOutside<HTMLDivElement>({
    onTriggered() {
      if (!propsInput.value && !contracted) setExpand(true);
    },
  });

  useEffect(() => {
    setExpand(!contracted);
  }, [contracted]);

  return (
    <S.Container
      ref={ref}
      data-testid="search-test"
      contracted={expand}
      disabled={disabled}
      onClick={e => {
        handleExpand();
        onClick?.(e);
      }}
      className={className}
    >
      {!expand && <S.InputSearch disabled={disabled} {...propsInput} />}
      {!propsInput.value && <SearchIcon />}
      {propsInput.value && (
        <CloseIcon
          data-testid="clear-search"
          onClick={() => {
            propsInput.onChange?.('');
          }}
        />
      )}
    </S.Container>
  );
}
