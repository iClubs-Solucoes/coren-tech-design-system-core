import { getDistanceFromBordersInsights } from 'common/utils';
import { css } from 'dynamic-styled-components';

type Open = 'above' | 'below';

interface OpenAboveOrBelowParams {
  referenceElement: Element;
  gap?: number;
  open?: Open;
}

export function openAboveOrBelow({
  referenceElement,
  gap = 0,
  open,
}: OpenAboveOrBelowParams) {
  let top = '',
    bottom = '',
    left = '';

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
  }

  if (open === 'above' || moreSpaceAbove) {
    top = 'unset';
    bottom = `${distanceFromElementToBottom + refElementRect.height + gap}px`;
    left = `${refElementRect.left}px`;
  }

  const openCSSObject = {
    top,
    bottom,
    left,
  };

  const openCSS = css(openCSSObject);

  return { refElementRect, openCSS, openCSSObject };
}
