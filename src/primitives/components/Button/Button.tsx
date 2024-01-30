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
  const { buttonTheme, loading } = styleProps;

  const bulletTheme = buttonTheme;

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
      {!!icon && !loading && icon}
      <div>{!onlyIcon && !loading && children}</div>
      {loading && (
        <S.Bullets
          bulletTheme={bulletTheme}
          data-testid="button-loading-bullets"
        />
      )}
    </S.Wrapper>
  );
}
