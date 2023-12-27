import { useCallback } from 'react';

import * as S from './styles';
import { SwitchProps } from './types';

export function Switch({
  checked,
  label,
  offLabel,
  icon = true,
  disabled,
  littleBall,
  onClick,
  onTurnOn,
  onTurnOff,
}: SwitchProps) {
  const handleClick = useCallback(() => {
    if (disabled) return;
    if (checked && onTurnOff) {
      onTurnOff();
    }

    if (!checked && onTurnOn) {
      onTurnOn();
    }

    onClick?.();
  }, [disabled, checked, onClick]);

  return (
    <S.SwitchContainer disabled={disabled} onClick={handleClick}>
      {checked && label?.position === 'pre' && <S.Label>{label?.text}</S.Label>}

      {!checked && offLabel?.position === 'pre' && (
        <S.Label>{offLabel?.text}</S.Label>
      )}

      <S.Switch>
        <S.Input checked={checked} readOnly />

        <S.Slider littleBall={littleBall}>
          {!!icon && (
            <>
              {checked && <S.StyledCheckIcon data-testid="check-icon" />}
              {!checked && <S.StyledCancelIcon data-testid="cancel-icon" />}
            </>
          )}
        </S.Slider>
      </S.Switch>

      {checked && label?.position === 'pos' && (
        <S.Label>{label?.text} </S.Label>
      )}

      {!checked && offLabel?.position === 'pos' && (
        <S.Label>{offLabel?.text}</S.Label>
      )}
    </S.SwitchContainer>
  );
}
