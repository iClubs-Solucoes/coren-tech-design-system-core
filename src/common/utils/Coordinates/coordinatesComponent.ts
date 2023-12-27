import { RefObject } from 'react';

type SetCoordenates = (coordinates: DOMRect) => void;

type RemoveListeners = () => void;

const defaultCoordenates: DOMRect = {
  height: 0,
  width: 0,
  x: 0,
  y: 0,
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  toJSON: () => {},
};

export function coordinatesComponent(
  ref: RefObject<HTMLElement>,
  setCoordinates: SetCoordenates,
): RemoveListeners {
  function set(coordinates?: DOMRect) {
    if (!coordinates) {
      setCoordinates(defaultCoordenates);
      return;
    }
    setCoordinates(coordinates);
  }

  function resize() {
    set(ref.current?.getBoundingClientRect());
  }

  function onload() {
    set(ref.current?.getBoundingClientRect());
  }

  set(ref.current?.getBoundingClientRect());

  window.addEventListener('resize', resize, true);
  window.addEventListener('onload', onload, true);

  return () => {
    window.removeEventListener('resize', resize);
    window.removeEventListener('onload', onload);
  };
}
