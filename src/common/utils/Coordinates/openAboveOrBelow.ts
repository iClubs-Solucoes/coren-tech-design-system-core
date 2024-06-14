import { getDistanceFromBordersInsights } from 'common/utils';
import { css } from 'dynamic-styled-components';
import { ElementOpening, YDirections } from 'models';

interface OpenAboveOrBelowParams {
  referenceElement: Element;
  gap?: number;
  open?: YDirections;
}

interface WasOpened {
  y: ElementOpening['y'] | '';
}

export function openAboveOrBelow({
  referenceElement,
  gap = 0,
  open,
}: OpenAboveOrBelowParams) {
  let top = '',
    bottom = '',
    left = '';

  const wasOpened: WasOpened = { y: '' };

  const {
    elementRect: refElementRect,
    moreSpaceAbove,
    moreSpaceBelow,
  } = getDistanceFromBordersInsights(referenceElement);

  const distanceFromElementToBottom =
    window.innerHeight - refElementRect.bottom;

  if (open === 'below' || moreSpaceBelow) {
    top = `${refElementRect.top + refElementRect.height + gap}px`;
    bottom = `unset`;
    left = `${refElementRect.left}px`;

    wasOpened.y = 'below';
  }

  if (open === 'above' || moreSpaceAbove) {
    top = 'unset';
    bottom = `${distanceFromElementToBottom + refElementRect.height + gap}px`;
    left = `${refElementRect.left}px`;

    wasOpened.y = 'above';
  }

  const openCSSObject = {
    top,
    bottom,
    left,
  };

  const openCSS = css(openCSSObject);

  return { refElementRect, openCSS, openCSSObject, wasOpened };
}
