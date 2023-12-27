import * as S from './styles';
import { ButtonProps } from './types';

export function Button({
  children,
  icon,
  type,
  onlyIcon,
  disabledBtn,
  onClick,
  ...styleProps
}: ButtonProps) {
  return (
    <S.Wrapper
      data-testid="button-test"
      disabledBtn={disabledBtn}
      disabled={disabledBtn}
      onlyIcon={onlyIcon}
      icon={icon}
      type={type}
      onClick={onClick}
      {...styleProps}
    >
      {!!icon && icon}
      <div>{!onlyIcon && children}</div>
    </S.Wrapper>
  );
}
