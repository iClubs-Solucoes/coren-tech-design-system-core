import {
  MouseEvent,
  ReactElement,
  cloneElement,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { createPortal } from 'react-dom';

import { useScroll } from 'hooks';

import * as S from './styles';
import { DropdownMenuProps } from './types';

export function Dropdown({ children, disabled, onChange }: DropdownMenuProps) {
  const ref = useRef<HTMLDivElement>(null);

  const [open, setOpen] = useState(false);
  const [coordinates, setCoordinates] = useState<DOMRect>({} as DOMRect);

  const { setBlockedScroll } = useScroll();

  const openDropdown = useCallback(
    (value: boolean) => {
      setOpen(value);

      onChange?.(value);
    },
    [open],
  );

  const renderTrigger = useCallback(
    (children: ReactElement) => {
      const propsTrigger = children.props;
      return cloneElement(children, {
        disabled,
        onClick: (e: MouseEvent) => {
          e.stopPropagation();
          propsTrigger?.onClick?.();

          openDropdown(!open);
        },
        onMouseEnter: () => {
          openDropdown(true);
        },

        open,
      });
    },
    [disabled, open, children],
  );

  const renderTriggerAndMenu = useCallback(() => {
    const trigger = renderTrigger(children[0]);

    const menu =
      !!children[1] &&
      cloneElement(children[1], {
        coordinates,
        open,
        onCloseDropdown: (value: boolean) => {
          openDropdown(value);
        },
      });

    return (
      <>
        {trigger}
        {!!open && createPortal(menu, document.body)}
      </>
    );
  }, [disabled, open, children, coordinates]);

  useEffect(() => {
    setBlockedScroll(open);

    return () => setBlockedScroll(false);
  }, [open]);

  useEffect(() => {
    const refCurrent = ref?.current as HTMLDivElement;
    setCoordinates(refCurrent?.getBoundingClientRect());
  }, [ref, open]);

  return <S.Container ref={ref}>{renderTriggerAndMenu()}</S.Container>;
}
