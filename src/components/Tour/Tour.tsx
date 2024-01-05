import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

import { coordinatesComponent } from 'common/utils';
import { useScroll } from 'hooks';

import * as S from './styles';
import { TourProps } from './types';

export function Tour({
  children,
  title,
  description,
  focus,
  idFilter,
  icon,
  direction,
  customCSSTour,
  onOk,
}: TourProps) {
  const refTarget = useRef<HTMLDivElement>(null);
  const refTour = useRef<HTMLDivElement>(null);

  const [coordinates, setCoordinates] = useState<DOMRect | undefined>(
    {} as DOMRect,
  );
  const [coordinatesTour, setCoordinatesTour] = useState<DOMRect | undefined>(
    {} as DOMRect,
  );

  const { setBlockedScroll } = useScroll();

  useEffect(() => {
    coordinatesComponent(refTarget, setCoordinates);
    coordinatesComponent(refTour, setCoordinatesTour);
  }, [focus]);

  useEffect(() => {
    if (idFilter) {
      const element = document.getElementById(idFilter);

      if (element) element.style.filter = focus ? 'blur(4px)' : '';
    }
  }, [focus, idFilter]);

  useEffect(() => {
    setBlockedScroll(!!focus);
  }, [focus]);

  return (
    <>
      <S.ChildrenPosition ref={refTarget} focus={focus}>
        {children}
      </S.ChildrenPosition>
      {!!focus &&
        createPortal(
          <>
            <S.Container
              coordinates={coordinates}
              coordinatesTour={coordinatesTour}
              direction={direction}
              style={customCSSTour}
            >
              <S.Tour ref={refTour}>
                <S.Head>
                  {icon}
                  {title}
                </S.Head>
                <S.Content>{description}</S.Content>
                <S.Footer>
                  <S.ButtonTourOk onClick={() => onOk?.()}>
                    Entendi
                  </S.ButtonTourOk>
                </S.Footer>
                <S.Arrow />
              </S.Tour>
            </S.Container>
            <S.Children coordinates={coordinates}>{children}</S.Children>
          </>,
          document.body,
        )}
    </>
  );
}
