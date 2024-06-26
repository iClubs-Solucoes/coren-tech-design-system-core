import { Tour } from 'components';
import { Navbar, ProgressBar } from 'primitives';

import * as S from './styles';
import { VisualizationDetailsProps } from './types';

export function VisualizationDetails({
  className,
  children,
  title,
  disabledOk,
  labelOk,
  tour,
  progress,
  okButtonTheme = 'primary',
  cancelButtonTheme = 'secondary',
  okLoading,
  xButton,
  onCancel,
  onOk,
  ...navbarProps
}: VisualizationDetailsProps) {
  return (
    <Navbar
      data-testid="visualization-details-container"
      className={className}
      {...navbarProps}
    >
      <>
        <S.Header>
          <S.TitleContainer>
            <S.Title>{title}</S.Title>
            {xButton && <S.X onClick={onCancel} />}
          </S.TitleContainer>

          <ProgressBar progress={progress} />
        </S.Header>
        <S.Content>{children}</S.Content>
        <S.Footer>
          <S.ButtonFooter
            border
            buttonTheme={cancelButtonTheme}
            onClick={onCancel}
            type="button"
          >
            Cancelar
          </S.ButtonFooter>

          <S.ButtonContainer>
            <Tour {...tour}>
              <S.ButtonFooter
                border
                disabledBtn={disabledOk}
                buttonTheme={okButtonTheme}
                loading={okLoading}
                onClick={onOk}
              >
                {labelOk}
              </S.ButtonFooter>
            </Tour>
          </S.ButtonContainer>
        </S.Footer>
      </>
    </Navbar>
  );
}
